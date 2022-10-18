import { ICryptography } from '~/application/services/cryptography';
import bcrypt from 'bcryptjs';

export class Cryptography implements ICryptography {
  async decrypt(cipher: string, hash: string): Promise<boolean> {
    const compare = await bcrypt.compare(cipher, hash);
    return compare;
  }

  async encrypt(cipher: string): Promise<string> {
    const hash = bcrypt.hash(cipher, 10);
    return hash;
  }
}
