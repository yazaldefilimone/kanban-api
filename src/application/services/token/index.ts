export interface ITokenGenerator {
  generate: (input: ITokenGenerator.Input) => Promise<ITokenGenerator.Output>;
}

export namespace ITokenGenerator {
  export type Input = {
    key: { id: string };
    expirationInMs?: number | string;
  };
  export type Output = string;
}

export interface ITokenValidator {
  validate: (input: ITokenValidator.Input) => Promise<ITokenValidator.Output>;
}

export namespace ITokenValidator {
  export type Input = { token: string };
  export type Output<T = any> = {
    status: boolean;
    data: T;
  };
}
