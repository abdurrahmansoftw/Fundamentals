import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Todo } from '../services/todoService'

const TodoList = () => {
	useQuery({
		queryKey: ['todos'],
		queryFn: () => axios.get('https://jsonplaceholder.typicode.com/todos'),
	})

	const [todos, setTodos] = useState<Todo[]>([])
	const [error, setError] = useState('')

	useEffect(() => {
		axios
			.get('https://jsonplaceholder.typicode.com/todos')
			.then((res) => setTodos(res.data))
			.catch((error) => setError(error))
	})

	if (error) return <p>{error}</p>

	return (
		<ul className='list-group'>
			{todos?.map((todo) => (
				<li key={todo.id} className='list-group-item'>
					{todo.title}
				</li>
			))}
		</ul>
	)
}

export default TodoList
