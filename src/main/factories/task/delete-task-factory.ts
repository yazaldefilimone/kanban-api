import { Request, Response } from 'express';
import { DeleteTaskUseCase } from '~/application/use-cases/task';
import { DeleteTaskController } from '~/infrastructure/controllers/task';
import { TaskRepository } from '~/infrastructure/repositories/task/task-repository';

export const deleteTaskFactory = async (request: Request, response: Response) => {
  const taskRepository = new TaskRepository();
  const deleteTaskUseCase = new DeleteTaskUseCase(taskRepository);
  const deleteTaskController = new DeleteTaskController(deleteTaskUseCase);
  return await deleteTaskController.execute({ request, response });
};
