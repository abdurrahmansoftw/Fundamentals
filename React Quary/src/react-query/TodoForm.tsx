import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { useRef } from 'react';
import { Todo } from '../hooks/useTodos';

interface AddTodoContext {
  previousTodos: Todo[];
}

const TodoForm = () => {
  const queryClient = useQueryClient();

  const addTodo = useMutation<Todo, Error, Todo, AddTodoContext>({
    mutationFn: (todo: Todo) =>
      axios.post<Todo>('https://jsonplaceholder.typicode.com/todos', todo).then((response) => response.data),

    onMutate: (newTodo) => {
      const previousTodos = queryClient.getQueryData<Todo[]>(['todos']) || [];

      queryClient.setQueryData<Todo[]>(['todos'], (todos) => [newTodo, ...(todos || [])]);
      if (ref.current) ref.current.value = '';
      return { previousTodos };
    },
    onSuccess: (savedTodo, newTodo) => {
      queryClient.setQueryData<Todo[]>(['todos'], (todos) =>
        todos?.map((todo) => (todo === newTodo ? savedTodo : todo))
      );
    },
    onError: (error, newTodo, context) => {
      if (!context) return;
      queryClient.setQueryData<Todo[]>(['todos'], context.previousTodos);
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
