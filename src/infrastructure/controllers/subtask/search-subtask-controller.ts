import { ISearchSubTaskUseCase } from '~/domain/task/use-cases';
import { IController } from '~/infrastructure/controllers/protocols';

export class SearchSubTaskController implements IController {
  private readonly searchSubTaskUseCase: ISearchSubTaskUseCase;
  constructor(searchSubTaskUseCase: ISearchSubTaskUseCase) {
    this.searchSubTaskUseCase = searchSubTaskUseCase;
  }
  async execute({ request, response }: IController.Input): Promise<IController.Output> {
    const payload = request.query;
    if (JSON.stringify(payload) === '{}' || !payload) {
      return response.status(204).json({ message: 'query is empty' });
    }

    const taskOrError = await this.searchSubTaskUseCase.perform(payload as any);
    if (taskOrError.isLeft()) {
      return response.status(400).json({ message: taskOrError.value.message });
    }

    return response.status(200).json(taskOrError.value);
  }
}
