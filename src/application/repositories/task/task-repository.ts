import { taskSaveType, taskStoreType } from '~/domain/task/dtos';

export interface ITaskRepository {
  save: (data: taskSaveType) => Promise<{ id: string }>;
  getId: ({ id }: { id: string }) => Promise<taskStoreType | null>;
  getStatus: ({ email }: { email: string }) => Promise<taskStoreType[] | null>;
  getName: ({ name }: { name: string }) => Promise<taskStoreType | null>;
  getAll: () => Promise<taskStoreType[]>;
}
