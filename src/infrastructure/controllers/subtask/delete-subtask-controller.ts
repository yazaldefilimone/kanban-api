import { IDeleteSubTaskUseCase } from '~/domain/task/use-cases';
import { IController } from '~/infrastructure/controllers/protocols';

export class DeleteSubTaskController implements IController {
  private readonly deleteSubTaskUseCase: IDeleteSubTaskUseCase;
  constructor(deleteSubTaskUseCase: IDeleteSubTaskUseCase) {
    this.deleteSubTaskUseCase = deleteSubTaskUseCase;
  }
  async execute({ request, response }: IController.Input): Promise<IController.Output> {
    const payload = request.query;
    if (JSON.stringify(payload) === '{}' || !payload) {
      return response.status(204).json({ message: 'query is empty' });
    }

    const taskOrError = await this.deleteSubTaskUseCase.perform(payload as any);
    if (taskOrError.isLeft()) {
      return response.status(400).json({ message: taskOrError.value.message });
    }

    return response.status(200).json({ message: 'task delete successfully' });
  }
}
