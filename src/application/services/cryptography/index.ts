export interface ICryptography {
  encrypt: (cipher: string) => Promise<string>;
  decrypt: (input: { plain: string; hash: string }) => Promise<boolean>;
}
