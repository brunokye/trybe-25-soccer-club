import { SignOptions, sign } from 'jsonwebtoken';

const secret = process.env.JWT_SECRET || 'secret';

const jwtConfig: SignOptions = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const createToken = (username: string): string => {
  const token: string = sign({ data: { username } }, secret, jwtConfig);

  return token;
};

export default createToken;
