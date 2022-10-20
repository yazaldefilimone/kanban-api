import { InternalServerError } from '~/domain/errors';
import { ILoginUserUseCase } from '~/domain/user/use-cases';
import { IController } from '~/infrastructure/controllers/protocols';

export class LoginUserController implements IController {
  private readonly loginUserUseCase: ILoginUserUseCase;
  constructor(loginUserUseCase: ILoginUserUseCase) {
    this.loginUserUseCase = loginUserUseCase;
  }

  async execute({ request, response }: IController.Input): Promise<IController.Output> {
    try {
      const payload = request.body;
      if (JSON.stringify(payload) === '{}') return response.status(204).json({ message: 'payload is empty' });

      const result = await this.loginUserUseCase.perform(payload);

      if (result.isLeft()) {
        return response.status(400).json({ message: result.value.message });
      }
      return response.status(201).json(result.value);
    } catch (error) {
      const serverError = new InternalServerError();
      return response.status(500).json({ message: serverError.message });
    }
  }
}
