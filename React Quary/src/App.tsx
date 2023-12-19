import Counter from './state-management/counter/Counter';
import HomePage from './state-management/HomePage';
import NavBar from './state-management/NavBar';
import { TaskProvider } from './state-management/tasks';

function App() {
  return (
    <div className='container p-4'>
      <h1>task</h1>

      <TaskProvider>
        <Counter />
        <NavBar />
        <HomePage />
      </TaskProvider>
    </div>
  );
}

export default App;
