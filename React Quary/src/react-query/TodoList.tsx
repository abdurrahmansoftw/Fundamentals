import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

interface Todo {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
}

const TodoList = () => {
  const fetchTodos = () => axios.get<Todo[]>('https://jsonplaceholder.typicode.com/todos').then((res) => res.data);

  const {
    isPending: loading,
    error,
    data: todos,
  } = useQuery<Todo[], Error>({ queryKey: ['todos'], queryFn: fetchTodos });

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
