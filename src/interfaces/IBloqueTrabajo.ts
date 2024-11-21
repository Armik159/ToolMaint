export interface IBloqueTrabajo {
  item: number;
  Task: ITask;
  taskStatus: string;
  id: string;
  indexTabla: number;
}

export interface ITask {
  name: string;
  id: string;
}
