type Subtasks = {
  id: string;
  name: string;
  status: string;
  taskId: string;
};

export type taskType = {
  name: string;
  description: string;
  statusId: string;
};

export type taskSaveType = {
  name: string;
  description: string;
  statusId: string;
};

export type taskStoreType = {
  id: string;
  name: string;
  description: string;
  statusId: string;
  subtasks?: Subtasks[];
  createdAt: string | Date;
  updateAt: string | Date;
};
