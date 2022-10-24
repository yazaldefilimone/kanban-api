export type boardType = {
  name: string;
  admin?: string[];
};

export type boardSaveType = {
  name: string;
  admin?: string[];
};

export type boardStoreType = {
  id: string;
  name: string;
  admin?: string[];
  createdAt: string | Date;
  updateAt: string | Date;
};
