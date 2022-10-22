import { NextFunction, Request, Response } from 'express';

export interface IController {
  execute: (Input: IController.Input) => Promise<IController.Output>;
}

export namespace IController {
  export type Input = { request: Request; response: Response; next?: NextFunction };
  export type Output = Response;
}
