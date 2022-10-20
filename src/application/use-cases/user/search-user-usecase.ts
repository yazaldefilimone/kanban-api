import { IUserRepository } from '~/application/repositories/user';
import { userStoreType } from '~/domain/user/dtos';
import { User } from '~/domain/user/entity';
import { ISearchUserUseCase } from '~/domain/user/use-cases';
import { left, right } from '~/shared/either';

export class SearchUserUseCase implements ISearchUserUseCase {
  private readonly userRepository: IUserRepository;
  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  async perform(input: ISearchUserUseCase.Input): ISearchUserUseCase.Output {
    let user: Omit<userStoreType, 'password'> | Omit<userStoreType, 'password'>[];
    const { email, id, name } = input;

    if (email) {
      const result = User.isValidEmail(email);

      if (result.isLeft()) {
        return left(result.value);
      }
      const userEmail = await this.userRepository.getEmail({ email: result.value });
      delete userEmail.password;
      return right(userEmail);
    }

    if (id) {
      user = await this.userRepository.getId({ id });
      return right(user);
    }
    if (name) {
      const userEmail = await this.userRepository.getName({ name });
      return right(userEmail);
    }

    const users = await this.userRepository.getAll();

    return right(users);
  }
}
