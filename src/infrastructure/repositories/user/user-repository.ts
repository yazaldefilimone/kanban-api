import { IUserRepository } from '~/application/repositories/user';
import { userStoreType } from '~/domain/user/dtos';
import { prismaClient } from '~/infrastructure/repositories/prisma';

export class UserRepository implements IUserRepository {
  private repositoryProps(props: any) {
    return {
      id: props.id ? (props.id as boolean) : true,
      email: props.email ? (props.email as boolean) : true,
      bio: props.bio ? (props.bio as boolean) : true,
      name: props.name ? (props.name as boolean) : true,
      createdAt: props.createdAt ? (props.createdAt as boolean) : true,
      tasks: props.tasks ? (props.tasks as boolean) : false,
      boards: props.boards ? (props.boards as boolean) : false,
      updateAt: props.updateAt ? (props.updateAt as boolean) : true,
      password: props.password ? (props.password as boolean) : false,
    };
  }
  async sign(data: userStoreType): Promise<{ id: string }> {
    const user = await prismaClient.user.create({
      data,
      select: {
        id: true,
      },
    });
    return user;
  }

  async getId({ id }: { id: string }): Promise<Omit<userStoreType, 'password'>> {
    const user = await prismaClient.user.findUnique({
      where: { id },
      select: this.repositoryProps({ password: false, boards: true }),
    });
    return user;
  }

  async getEmail({ email }: { email: string }): Promise<userStoreType> {
    const user = await prismaClient.user.findUnique({
      where: { email },
    });
    return user;
  }

  async getName({ name }: { name: string }): Promise<Omit<userStoreType, 'password'>[] | null> {
    const user = await prismaClient.user.findMany({
      where: {
        name: {
          contains: name,
          mode: 'insensitive',
        },
      },
      orderBy: {
        name: 'asc',
      },
      skip: 0,
      take: 15,
      select: this.repositoryProps({ password: false }),
    });
    return user;
  }

  async getAll(): Promise<Omit<userStoreType, 'password'>[]> {
    const user = await prismaClient.user.findMany({
      select: this.repositoryProps({ password: false }),
    });
    return user;
  }
}
