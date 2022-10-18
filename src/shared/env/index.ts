import { config } from 'dotenv';
config();

export const env = {
  port: process.env.PORT || 3003,
  token: {
    privateKey: process.env.TOKEN_PRIVATE_KEY,
  },
};
