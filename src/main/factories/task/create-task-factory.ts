import { Request, Response } from 'express';
import { CreateTaskUseCase } from '~/application/use-cases/task';
import { CreateTaskController } from '~/infrastructure/controllers/task';
import { TaskRepository } from '~/infrastructure/repositories/task/task-repository';

export const createTaskFactory = async (request: Request, response: Response) => {
  const taskRepository = new TaskRepository();
  const createTaskUseCase = new CreateTaskUseCase(taskRepository);
  const createTaskController = new CreateTaskController(createTaskUseCase);
  return await createTaskController.execute({ request, response });
};
