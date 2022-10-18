import { InternalServerError } from '~/domain/errors';
import { ISearchUserUseCase } from '~/domain/user/use-cases';
import { IController } from '~/infrastructure/controllers/protocols';

export class SearchUserController implements IController {
  private readonly searchUserUseCase: ISearchUserUseCase;
  constructor(searchUserUseCase: ISearchUserUseCase) {
    this.searchUserUseCase = searchUserUseCase;
  }

  async execute({ request, response }: IController.Input): Promise<IController.Output> {
    try {
      const payload = request.query;
      const result = await this.searchUserUseCase.perform(payload);

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
