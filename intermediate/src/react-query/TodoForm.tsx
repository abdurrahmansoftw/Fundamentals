import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import { useRef } from 'react'
import { Todo } from './TodoList'

interface AddTodoContext {
  previusTodos: Todo[]
}

const TodoForm = () => {
  const queryClient = useQueryClient()

  const addTodo = useMutation<Todo, Error, Todo, AddTodoContext>({
    mutationFn: (todo: Todo) =>
      axios
        .post<Todo>('https://jsonplaceholder.typicode.com/todos', todo)
        .then((res) => res.data),

    onMutate: (newTodo: Todo) => {
      const previusTodos = queryClient.getQueryData<Todo[]>(['todos']) || []

      queryClient.setQueryData<Todo[]>(['todos'], (todos) => [
        newTodo,
        ...(todos || []),
      ])
      if (ref.current) return (ref.current.value = '')

      return { previusTodos }
    },

    onSuccess: (savedTodo, newTodo) => {
      queryClient.setQueryData<Todo[]>(['todos'], (todos) =>
        todos?.map((todo) => (todo === newTodo ? savedTodo : todo))
      )
    },

    onError: (error, newTodo, context) => {
      queryClient.setQueryData<Todo[]>(['todos'], context?.previusTodos)
    },
  })

  const ref = useRef<HTMLInputElement>(null)

  return (
    <div>
      {addTodo.error && (
        <div className='alert alert-danger'>{addTodo.error.message}</div>
      )}
      <form
        className='row mb-3'
        onSubmit={(event) => {
          event.preventDefault()

          if (ref.current && ref.current.value)
            addTodo.mutate({
              id: 0,
              title: ref.current?.value,
              completed: false,
              userId: 1,
            })
        }}
      >
        <div className='col-10'>
          <input ref={ref} type='text' className='form-control ' />
        </div>
        <div className='col'>
          <button className='btn btn-primary' disabled={addTodo.isPending}>
            {addTodo.isPending ? 'Adding' : 'Add'}
          </button>
        </div>
      </form>
    </div>
  )
}

export default TodoForm
