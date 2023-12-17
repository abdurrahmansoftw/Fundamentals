import useTodos from '../hooks/useTodos';

const TodoList = () => {
  const { isPending: loading, error, data: todos } = useTodos();

  if (loading) return 'Loading...';
  if (error) return 'An error has occurred: ' + error.message;

  return (
    <ul className='list-group'>
      {todos?.map((todo) => (
        <li key={todo.id} className='list-group-item'>
          {todo.title}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
