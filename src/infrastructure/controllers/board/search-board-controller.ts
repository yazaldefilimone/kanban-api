import { InternalServerError } from '~/domain/errors';
import { ISearchBoardUseCase } from '~/domain/board/use-cases';
import { IController } from '~/infrastructure/controllers/protocols';

export class SearchBoardController implements IController {
  private readonly searchBoardUseCase: ISearchBoardUseCase;
  constructor(searchBoardUseCase: ISearchBoardUseCase) {
    this.searchBoardUseCase = searchBoardUseCase;
  }

  async execute({ request, response }: IController.Input): Promise<IController.Output> {
    try {
      const payload = { userId: request.userId, ...request.query };

      const result = await this.searchBoardUseCase.perform(payload);

      if (result.isLeft()) {
        return response.status(400).json({ message: result.value.message });
      }
      return response.status(200).json(result.value);
    } catch (error) {
      const serverError = new InternalServerError();
      return response.status(500).json({ message: serverError.message });
    }
  }
}
