import { ITokenGenerator, ITokenValidator } from '~/application/services/token';
import { JwtPayload, sign, verify } from 'jsonwebtoken';
import { env } from '~/shared/env';
type ResponseToken = {
  status: boolean;
  data: string | JwtPayload;
};
export class TokenGenerator implements ITokenGenerator {
  async generate({ key, expirationInMs }: ITokenGenerator.Input): Promise<ITokenGenerator.Output> {
    const expiration = expirationInMs ? expirationInMs : '1d';
    const token = sign(key, env.token.privateKey, { expiresIn: expiration });
    return token;
  }
}

export class TokenValidator implements ITokenValidator {
  async validate({ token }: ITokenValidator.Input): Promise<ITokenValidator.Output<ResponseToken>> {
    let response: ITokenValidator.Output<ResponseToken>;
    verify(token, env.token.privateKey, (error, decoder) => {
      if (error) {
        response = {
          status: false,
          data: error.message as any,
        };
      }
      response = {
        status: true,
        data: decoder as any,
      };
    });

    return response;
  }
}
