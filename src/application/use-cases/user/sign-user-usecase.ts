import { IUserRepository } from '~/application/repositories/user';
import { ICryptography } from '~/application/services/cryptography';
import { ITokenGenerator } from '~/application/services/token';
import { AlreadyExistsError } from '~/domain/errors';
import { User } from '~/domain/user/entity';
import { ISignUserUseCase } from '~/domain/user/use-cases';
import { left, right } from '~/shared/either';

export class SignUserUseCase implements ISignUserUseCase {
  private readonly userRepository: IUserRepository;
  private readonly tokenGenerator: ITokenGenerator;
  private readonly cryptography: ICryptography;
  constructor(userRepository: IUserRepository, tokenGenerator: ITokenGenerator, cryptography: ICryptography) {
    this.userRepository = userRepository;
    this.tokenGenerator = tokenGenerator;
    this.cryptography = cryptography;
  }

  async perform(input: ISignUserUseCase.Input): ISignUserUseCase.Output {
    const building = User.build(input);

    if (building.isLeft()) return left(building.value);
    const user = building.value;

    const userExists = await this.userRepository.getEmail({ email: user.email });
    if (userExists) {
      return left(new AlreadyExistsError({ param: 'user' }));
    }

    const hash = await this.cryptography.encrypt(user.password);
    user.password = hash;

    const { id } = await this.userRepository.sign(user);
    const token = await this.tokenGenerator.generate({ key: id });

    return right({
      id,
      token,
    });
  }
}
