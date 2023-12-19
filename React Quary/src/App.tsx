import { useReducer } from 'react';
import TaskContext from './contexts/taskContext';
import taskReducer from './reducers/taskReducer';
import AuthProvider from './state-management/AuthProvider';
import HomePage from './state-management/HomePage';
import NavBar from './state-management/NavBar';

function App() {
  const [tasks, taskDispatch] = useReducer(taskReducer, []);

  return (
    <div className='container p-4'>
      <h1>Todo Form</h1>

      <AuthProvider>
        <TaskContext.Provider value={{ tasks, dispatch: taskDispatch }}>
          <NavBar />
          <HomePage />
        </TaskContext.Provider>
      </AuthProvider>
    </div>
  );
}

export default App;
