import { ICryptography } from '~/application/services/cryptography';
import bcrypt from 'bcryptjs';

export class Cryptography implements ICryptography {
  async decrypt(input: { plain: string; hash: string }): Promise<boolean> {
    const compare = await bcrypt.compare(input.plain, input.hash);
    return compare;
  }

  async encrypt(cipher: string): Promise<string> {
    const hash = bcrypt.hash(cipher, 10);
    return hash;
  }
}
