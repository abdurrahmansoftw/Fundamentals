import { useReducer } from 'react'
import LoginStatus from './state-management/LoginStatus'
import taskReducer from './state-management/reducers/taskReducer'

function App() {
  const [tasks, dispatch] = useReducer(taskReducer, [])
  return (
    <div>
      <h1>Login Status</h1>
      <LoginStatus />
    </div>
  )
}

export default App
