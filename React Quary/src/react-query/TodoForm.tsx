import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { useRef } from 'react';
import { Todo } from '../hooks/useTodos';

const TodoForm = () => {
  const queryClient = useQueryClient();

  const addTodo = useMutation<Todo, Error, Todo>({
    mutationFn: (todo: Todo) =>
      axios.post<Todo>('https://jsonplaceholder.typicode.com/todos', todo).then((response) => response.data),
    onSuccess: (savedTodo, newTodo) => {
      // console.log('savedTodo', savedTodo);
      // APPROACH 1: Invalidating The Cache
      // queryClient.invalidateQueries({ queryKey: ['todos'] });
      // APPROACH 2:
      queryClient.setQueryData<Todo[]>(['todos'], (todos) => [savedTodo, ...(todos || [])]);
      if (ref.current) ref.current.value = '';
    },
  });
  const ref = useRef<HTMLInputElement>(null);

  return (
    <>
      {addTodo.error && <div className='alert alert-primary mb-3'>{addTodo.error.message}</div>}
      <form
        className='row mb-3'
        onSubmit={(event) => {
          if (!ref.current?.value) return;

          event.preventDefault();
          addTodo.mutate({
            id: 0,
            title: ref.current?.value,
            completed: false,
            userId: Date.now(),
          });
        }}>
        <div className='col'>
          <input ref={ref} type='text' className='form-control' />
        </div>
        <div className='col'>
          <button disabled={addTodo.isPending} className='btn btn-primary'>
            {addTodo.isPending ? 'Adding' : 'Add'}
          </button>
        </div>
      </form>
    </>
  );
};

export default TodoForm;
