import AuthProvider from './state-management/auth/AuthProvider';
import HomePage from './state-management/HomePage';
import NavBar from './state-management/NavBar';
import { TaskProvider } from './state-management/tasks';

function App() {
  return (
    <div className='container p-4'>
      <h1>task</h1>

      <AuthProvider>
        <TaskProvider>
          <NavBar />
          <HomePage />
        </TaskProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
