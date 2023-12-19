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

export default taskReducer;
