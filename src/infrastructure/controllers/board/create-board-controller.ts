import { ICreateBoardUseCase } from '~/domain/board/use-cases';
import { IController } from '~/infrastructure/controllers/protocols';

export class CreateBoardController implements IController {
  private readonly createBoardUseCase: ICreateBoardUseCase;
  constructor(createBoardUseCase: ICreateBoardUseCase) {
    this.createBoardUseCase = createBoardUseCase;
  }

  async execute({ request, response }: IController.Input): Promise<IController.Output> {
    const payload = request.body;
    if (JSON.stringify(payload) === '{}') {
      return response.status(204).json({ message: 'payload is empty' });
    }

    payload.userId = request.userId;

    const boardOrError = await this.createBoardUseCase.perform(payload);
    if (boardOrError.isLeft()) {
      return response.status(400).json({ message: boardOrError.value.message });
    }

    return response.status(200).json(boardOrError.value);
  }
}
