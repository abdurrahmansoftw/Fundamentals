import React from 'react'
import { Task, TaskAction } from '../reducers/taskReducer'

interface TaskContextType {
  tasks: Task[]
  dispatch: TaskAction
}

const TaskContext = React.createContext<TaskContextType>({} as TaskContextType)

export default TaskContext
