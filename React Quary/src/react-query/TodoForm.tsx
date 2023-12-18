import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useRef } from 'react';
import { Todo } from '../hooks/useTodos';

const TodoForm = () => {
  const addTodo = useMutation({
    mutationFn: (todo: Todo) =>
      axios
      .post('https://jsonplaceholder.typicode.com/todos', todo)
      .then((response) => response.data),
  });
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form
      className='row mb-3'
      onSubmit={(event) => {
        if (!ref.current?.value) return;

        event.preventDefault();
        addTodo.mutate({
          id: 0,
          title: ref.current?.value,
          completed: false,
          userId: 1,
        });
      }}>
      <div className='col'>
        <input ref={ref} type='text' className='form-control' />
      </div>
      <div className='col'>
        <button className='btn btn-primary'>Add</button>
      </div>
    </form>
  );
};

export default TodoForm;
