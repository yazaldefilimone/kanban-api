import { IActionSubTaskUseCase } from '~/domain/task/use-cases';
import { IController } from '~/infrastructure/controllers/protocols';

export class ActionSubTaskController implements IController {
  private readonly actionSubTaskUseCase: IActionSubTaskUseCase;
  constructor(actionSubTaskUseCase: IActionSubTaskUseCase) {
    this.actionSubTaskUseCase = actionSubTaskUseCase;
  }

  async execute({ request, response }: IController.Input): Promise<IController.Output> {
    const payload = request.body;
    if (JSON.stringify(payload) === '{}') {
      return response.status(204).json({ message: 'payload is empty' });
    }

    payload.userId = request.userId;

    const taskOrError = await this.actionSubTaskUseCase.perform(payload);

    if (taskOrError.isLeft()) {
      return response.status(400).json({ message: taskOrError.value.message });
    }

    return response.status(200).json(taskOrError.value);
  }
}
