export interface ICryptography {
  decrypt: (cipher: string) => Promise<string>;
  encrypt: (plain: string) => Promise<string>;
}
