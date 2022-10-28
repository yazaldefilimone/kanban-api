export class UnauthorizedError extends Error {
  constructor({ param }: { param: string }) {
    super(`This [${param}] is not authorized for this function!!`);
    this.name = 'UnauthorizedError';
  }
}
