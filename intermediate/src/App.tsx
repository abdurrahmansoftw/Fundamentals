import { useReducer } from 'react'
import HomePage from './state-management/HomePage'
import NavBar from './state-management/NavBar'
import TasksContext from './state-management/context/taskContext'
import taskReducer from './state-management/reducers/taskReducer'

function App() {
  const [tasks, dispatch] = useReducer(taskReducer, [])
  return (
    <TasksContext.Provider value={{ tasks, dispatch }}>
      <NavBar />
      <HomePage />
    </TasksContext.Provider>
  )
}

export default App
