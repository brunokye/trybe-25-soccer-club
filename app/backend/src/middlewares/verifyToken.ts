import { Request, Response, NextFunction } from 'express';
import { validateToken } from '../utils/auth';

const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ message: 'Token not found' });
  }

  const validToken = validateToken(authorization);
  if (!validToken) {
    return res.status(401).json({ message: 'Token must be a valid token' });
  }

  next();
};

export default verifyToken;
