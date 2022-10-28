import { IDeleteBoardUseCase } from '~/domain/board/use-cases';
import { IController } from '~/infrastructure/controllers/protocols';

export class DeleteBoardController implements IController {
  private readonly deleteBoardUseCase: IDeleteBoardUseCase;
  constructor(deleteBoardUseCase: IDeleteBoardUseCase) {
    this.deleteBoardUseCase = deleteBoardUseCase;
  }
  async execute({ request, response }: IController.Input): Promise<IController.Output> {
    const payload = request.query;
    if (JSON.stringify(payload) === '{}' || !payload) {
      return response.status(204).json({ message: 'query is empty' });
    }

    const boardOrError = await this.deleteBoardUseCase.perform(payload as any);
    if (boardOrError.isLeft()) {
      return response.status(400).json({ message: boardOrError.value.message });
    }

    return response.status(200).json({ message: 'board delete successfully' });
  }
}
