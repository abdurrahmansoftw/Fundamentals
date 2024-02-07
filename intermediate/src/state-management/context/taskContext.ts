import React, { Dispatch } from 'react'
import { Task, TasksAction } from '../reducers/taskReducer'

interface TaskContextType {
  tasks: Task[]
  dispatch: Dispatch<TasksAction>
}

const TasksContext = React.createContext<TaskContextType>({} as TaskContextType)

export default TasksContext
