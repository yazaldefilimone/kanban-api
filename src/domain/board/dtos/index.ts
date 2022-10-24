export type boardType = {
  name: string;
  admin?: string[];
};

export type boardSaveType = {
  name: string;
  admin?: string[];
  userId: string;
};

export type boardStoreType = {
  id: string;
  name: string;
  admin?: string[];
  userId: string;
  createdAt: string | Date;
  updateAt: string | Date;
};
