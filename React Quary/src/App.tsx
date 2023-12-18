import TodoForm from './react-query/TodoForm';
import TodoList from './react-query/TodoList';

function App() {
  return (
    <div className='container p-4'>
      <h1>Todo Form</h1>
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;
