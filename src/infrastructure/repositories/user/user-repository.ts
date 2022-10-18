import { IUserRepository } from '~/application/repositories/user';
import { userStoreType } from '~/domain/user/dtos';
import { prismaClient } from '~/infrastructure/repositories/prisma';

export class UserRepository implements IUserRepository {
  async sign(data: userStoreType): Promise<{ id: string }> {
    const user = await prismaClient.user.create({
      data,
      select: {
        id: true,
      },
    });
    return user;
  }

  async getId({ id }: { id: string }): Promise<userStoreType> {
    const user = await prismaClient.user.findUnique({
      where: { id },
    });
    return user;
  }

  async getEmail({ email }: { email: string }): Promise<userStoreType> {
    const user = await prismaClient.user.findUnique({
      where: { email },
    });
    return user;
  }

  async getAll(): Promise<userStoreType[]> {
    const user = await prismaClient.user.findMany();
    return user;
  }
}
