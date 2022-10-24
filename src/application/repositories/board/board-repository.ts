import { boardSaveType, boardStoreType } from '~/domain/board/dtos';

export interface IBoardRepository {
  save: (data: boardSaveType) => Promise<{ id: string }>;
  getId: ({ id }: { id: string }) => Promise<boardStoreType | null>;
  getUserId: ({ statusId }: { statusId: string }) => Promise<boardStoreType | null>;
  getName: ({ name }: { name: string }) => Promise<{ id: string } | null>;
  delete: ({ id }: { id: string }) => Promise<void>;
  getAll: () => Promise<boardStoreType[]>;
}
