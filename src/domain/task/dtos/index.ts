type Subtasks = {
  id: string;
  name: string;
  status: string;
  taskId: string;
  userId: string;
  boardId: string;
};

export type taskType = {
  name: string;
  description: string;
  statusId: string;
  userId: string;
  boardId: string;
};

export type taskSaveType = {
  name: string;
  description: string;
  userId: string;
  boardId: string;
  statusId: string;
};

export type taskStoreType = {
  id: string;
  name: string;
  description: string;
  statusId: string;
  userId: string;
  boardId: string;
  subtasks?: Subtasks[];
  createdAt: string | Date;
  updateAt: string | Date;
};
