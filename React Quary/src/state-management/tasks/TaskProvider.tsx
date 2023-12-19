import { ReactNode, useReducer } from 'react';
import TaskContext from './taskContext';

export interface Task {
  id: number;
  title: string;
}

interface AddTask {
  type: 'ADD';
  payload: Task;
}

interface DeleteTask {
  type: 'DELETE';
  taskId: number;
}

export type TaskAction = AddTask | DeleteTask;

const taskReducer = (tasks: Task[], action: TaskAction): Task[] => {
  switch (action.type) {
    case 'ADD':
      return [...tasks, action.payload];
    case 'DELETE':
      return tasks.filter((task) => task.id !== action.taskId);
    default:
      return tasks;
  }
};

interface Props {
  children: ReactNode;
}

const TaskProvider = ({ children }: Props) => {
  const [tasks, dispatch] = useReducer(taskReducer, []);
  return <TaskContext.Provider value={{ tasks, dispatch }}>{children}</TaskContext.Provider>;
};

export default TaskProvider;
