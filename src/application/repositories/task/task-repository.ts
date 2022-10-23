import { taskSaveType, taskStoreType } from '~/domain/task/dtos';

export interface ITaskRepository {
  save: (data: taskSaveType) => Promise<{ id: string }>;
  getId: ({ id }: { id: string }) => Promise<taskStoreType | null>;
  getStatus: ({ statusId }: { statusId: string }) => Promise<taskStoreType[] | null>;
  getName: ({ name }: { name: string }) => Promise<{ id: string } | null>;
  getAll: () => Promise<taskStoreType[]>;
}
