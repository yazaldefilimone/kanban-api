import { IUserRepository } from '~/application/repositories/user';
import { ICryptography } from '~/application/services/cryptography';
import { ITokenGenerator } from '~/application/services/token';
import { NotFoundError } from '~/domain/errors';
import { User } from '~/domain/user/entity';
import { ILoginUserUseCase } from '~/domain/user/use-cases';
import { left, right } from '~/shared/either';

export class LoginUserUseCase implements ILoginUserUseCase {
  private readonly userRepository: IUserRepository;
  private readonly tokenGenerator: ITokenGenerator;
  private readonly cryptography: ICryptography;
  constructor(userRepository: IUserRepository, tokenGenerator: ITokenGenerator, cryptography: ICryptography) {
    this.userRepository = userRepository;
    this.tokenGenerator = tokenGenerator;
    this.cryptography = cryptography;
  }

  async perform(input: ILoginUserUseCase.Input): ILoginUserUseCase.Output {
    const building = {
      email: User.isValidEmail(input.email),
      password: User.isValidPassword(input.password),
    };

    if (building.email.isLeft()) return left(building.email.value);
    if (building.password.isLeft()) return left(building.password.value);

    const user = {
      email: building.email.value,
      password: building.password.value,
    };

    const userExists = await this.userRepository.getEmail({ email: user.email });
    if (!userExists) {
      return left(new NotFoundError({ param: 'user' }));
    }

    const hash = await this.cryptography.decrypt({ plain: user.password, hash: userExists.password });
    if (!hash) {
      return left(new Error('passwords are not the same'));
    }

    delete userExists.password;
    const token = await this.tokenGenerator.generate({ key: { id: userExists.id } });

    return right({
      id: userExists.id,
      token,
    });
  }
}
