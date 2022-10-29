import { PrismaClient } from '@prisma/client';

export class PrismaSingleton {
  private static client: PrismaClient | null = null;
  private constructor() {}

  static get instance() {
    if (PrismaSingleton.client === null) {
      PrismaSingleton.client = new PrismaClient();
      return PrismaSingleton.client;
    }
    return PrismaSingleton.client;
  }
}
