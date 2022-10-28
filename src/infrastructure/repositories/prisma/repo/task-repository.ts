import { ITaskRepository } from '~/application/repositories';
import { taskSaveType, taskStoreType } from '~/domain/task/dtos';
import { PrismaSingleton } from '~/infrastructure/repositories/prisma/settings';

export class TaskRepository implements ITaskRepository {
  private readonly repositoryProps = (props?: any) => {
    return {
      id: props.id ? (props.id as boolean) : true,
      name: props.name ? (props.name as boolean) : true,
      description: props.description ? (props.description as boolean) : true,
      statusId: props.statusId ? (props.statusId as boolean) : true,
      userId: props.userId ? (props.userId as boolean) : true,
      boardId: props.boardId ? (props.boardId as boolean) : true,
      subTasks: props.subTasks ? props.subTasks : false,
      createdAt: props.createdAt ? (props.createdAt as boolean) : true,
      updateAt: props.updateAt ? (props.updateAt as boolean) : true,
    };
  };
  async save(data: taskStoreType): Promise<{ id: string }> {
    const metadata = await PrismaSingleton.instance.task.create({
      data,
      select: {
        id: true,
      },
    });

    return metadata;
  }
  async getId({ id }: { id: string }): Promise<taskStoreType> {
    const metadata = await PrismaSingleton.instance.task.findUnique({
      where: { id },
    });

    return metadata;
  }
  async getStatus({ statusId }: { statusId: string }): Promise<taskStoreType[]> {
    const metadata = await PrismaSingleton.instance.task.findMany({
      where: { status: { id: statusId } },
      select: this.repositoryProps(),
    });

    return metadata;
  }

  async getName({ name }: { name: string }): Promise<{ id: string }> {
    const metadata = await PrismaSingleton.instance.task.findFirst({
      where: {
        name,
      },
      select: {
        id: true,
      },
    });

    return metadata;
  }
  async delete({ id }: { id: string }): Promise<void> {
    await PrismaSingleton.instance.task.delete({
      where: { id },
    });
  }
  async getAll(): Promise<taskStoreType[]> {
    const metadata = await PrismaSingleton.instance.task.findMany();
    return metadata;
  }
}
