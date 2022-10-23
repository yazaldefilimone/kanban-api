import { ISearchTaskUseCase } from '~/domain/task/use-cases';
import { IController } from '~/infrastructure/controllers/protocols';

export class SearchTaskController implements IController {
  private readonly searchTaskUseCase: ISearchTaskUseCase;
  constructor(searchTaskUseCase: ISearchTaskUseCase) {
    this.searchTaskUseCase = searchTaskUseCase;
  }
  async execute({ request, response }: IController.Input): Promise<IController.Output> {
    const payload = request.query;
    if (JSON.stringify(payload) === '{}' || !payload) {
      return response.status(204).json({ message: 'query is empty' });
    }

    const taskOrError = await this.searchTaskUseCase.perform(payload as any);
    if (taskOrError.isLeft()) {
      return response.status(400).json({ message: taskOrError.value.message });
    }

    return response.status(200).json(taskOrError.value);
  }
}
