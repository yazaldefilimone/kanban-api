import { subTaskStoreType } from '~/domain/task/dtos';

export interface ISubTaskRepository {
  save: (data: Omit<subTaskStoreType, 'id'>) => Promise<{ id: string }>;
  getId: ({ id }: { id: string }) => Promise<subTaskStoreType | null>;
  getTaskId: ({ taskId }: { taskId: string }) => Promise<subTaskStoreType[] | null>;
  delete: ({ id }: { id: string }) => Promise<void>;
}
