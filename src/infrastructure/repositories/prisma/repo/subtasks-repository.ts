import { ISubTaskRepository } from '~/application/repositories';
import { subTaskStoreType } from '~/domain/task/dtos';
import { PrismaSingleton } from '~/infrastructure/repositories/prisma/settings';

export class SubTaskRepository implements ISubTaskRepository {
  async save(data: Omit<subTaskStoreType, 'id'>): Promise<{ id: string }> {
    const metadata = await PrismaSingleton.instance.subTask.create({
      data,
    });

    return metadata;
  }
  async update(data: subTaskStoreType): Promise<subTaskStoreType> {
    const dataUpdate: any = {};
    if (data.name) dataUpdate.name = data.name;
    if (data.status) dataUpdate.status = data.status;

    const metadata = await PrismaSingleton.instance.subTask.update({
      where: { id: data.id },
      data: dataUpdate,
    });

    return metadata;
  }
  async getId({ id }: { id: string }): Promise<subTaskStoreType> {
    const metadata = await PrismaSingleton.instance.subTask.findUnique({
      where: { id },
    });
    return metadata;
  }
  async getTaskId({ taskId }: { taskId: string }): Promise<subTaskStoreType[]> {
    const metadata = await PrismaSingleton.instance.subTask.findMany({
      where: { taskId },
    });

    return metadata;
  }
  async getName({ name }: { name: string }): Promise<{ id: string }> {
    const metadata = await PrismaSingleton.instance.subTask.findFirst({
      where: { name },
      select: {
        id: true,
      },
    });
    return metadata;
  }
  async delete({ id }: { id: string }): Promise<void> {
    await PrismaSingleton.instance.subTask.delete({
      where: { id },
    });
  }
}
