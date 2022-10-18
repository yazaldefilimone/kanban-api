export interface ICryptography {
  encrypt: (cipher: string) => Promise<string>;
  decrypt: (plain: string, hash: string) => Promise<boolean>;
}
