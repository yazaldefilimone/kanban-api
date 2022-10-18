export type userType = {
  name: string;
  email: string;
  password: string;
  bio?: string;
};

export type userLoginType = {
  email: string;
  password: string;
  bio?: string;
};

export type userStoreType = {
  id: string;
  email: string;
  bio?: string;
  name: string;
  password: string;
  createdAt: string | Date;
  updateAt: string | Date;
};
