import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { useRef } from 'react'
import { Todo } from './TodoList'

const TodoForm = () => {
  useMutation({
    mutationFn: (todo: Todo) =>
      axios.post('https://jsonplaceholder.typicode.com/todos'),
  })

  const ref = useRef<HTMLInputElement>(null)

  return (
    <form
      className='row mb-3'
      onSubmit={(event) => {
        event.preventDefault()
      }}
    >
      <div className='col-10'>
        <input ref={ref} type='text' className='form-control ' />
      </div>
      <div className='col'>
        <button className='btn btn-primary'>Add</button>
      </div>
    </form>
  )
}

export default TodoForm
