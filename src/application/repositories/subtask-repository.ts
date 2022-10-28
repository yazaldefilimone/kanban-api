import { subTaskStoreType } from '~/domain/task/dtos';

export interface ISubTaskRepository {
  save: (data: Omit<subTaskStoreType, 'id'>) => Promise<{ id: string }>;
  update: (data: subTaskStoreType) => Promise<subTaskStoreType>;
  getId: ({ id }: { id: string }) => Promise<subTaskStoreType | null>;
  getName: ({ name }: { name: string }) => Promise<{ id: string } | null>;
  getTaskId: ({ taskId }: { taskId: string }) => Promise<subTaskStoreType[] | null>;
  delete: ({ id }: { id: string }) => Promise<void>;
}
