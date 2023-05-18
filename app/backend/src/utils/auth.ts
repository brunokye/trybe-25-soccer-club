import { SignOptions, sign, verify, decode, JwtPayload } from 'jsonwebtoken';

const secret = process.env.JWT_SECRET || 'secret';

const jwtConfig: SignOptions = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

export const createToken = (email: string) => sign({ data: { email } }, secret, jwtConfig);

export const validateToken = (token: string) => {
  try {
    return verify(token, secret);
  } catch (e) {
    console.log(e);
  }
};

export const decodeToken = (token: string) => {
  const result = decode(token) as JwtPayload;
  const { email } = result.data;

  return email;
};
