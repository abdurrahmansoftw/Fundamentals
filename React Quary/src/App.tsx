import { useReducer } from 'react';
import AuthContext from './contexts/authContext';
import TaskContext from './contexts/taskContext';
import authReducer from './reducers/authReducer';
import taskReducer from './reducers/taskReducer';
import HomePage from './state-management/HomePage';
import NavBar from './state-management/NavBar';

function App() {
  const [tasks, taskDispatch] = useReducer(taskReducer, []);
  const [user, authDispatch] = useReducer(authReducer, '');

  return (
    <div className='container p-4'>
      <h1>Todo Form</h1>

      <AuthContext.Provider value={{ user, dispatch: authDispatch }}>
        <TaskContext.Provider value={{ tasks, dispatch: taskDispatch }}>
          <NavBar />
          <HomePage />
        </TaskContext.Provider>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
