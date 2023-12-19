import { useReducer } from 'react';
import TaskContext from './contexts/taskContext';
import taskReducer from './reducers/taskReducer';
import HomePage from './state-management/HomePage';
import NavBar from './state-management/NavBar';

function App() {
  const [tasks, dispatch] = useReducer(taskReducer, []);

  return (
    <div className='container p-4'>
      <h1>Todo Form</h1>

      <TaskContext.Provider value={{ tasks, dispatch }}>
        <NavBar />
        <HomePage />
      </TaskContext.Provider>
    </div>
  );
}

export default App;
