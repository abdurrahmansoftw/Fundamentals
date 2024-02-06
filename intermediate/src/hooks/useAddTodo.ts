import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import { Todo } from '../react-query/TodoList'

interface AddTodoContext {
  previusTodos: Todo[]
}

export const useAddTodo = (onAdd: () => void) => {
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

      onAdd()
      return { previusTodos }
    },

    onSuccess: (savedTodo, newTodo) => {
      queryClient.setQueryData<Todo[]>(['todos'], (todos) =>
        todos?.map((todo) => (todo === newTodo ? savedTodo : todo))
      )
    },

    onError: (error, newTodo, context) => {
      if (!context) return
      queryClient.setQueryData<Todo[]>(['todos'], context?.previusTodos)
    },
  })
}
