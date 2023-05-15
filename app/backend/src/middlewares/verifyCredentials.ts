import { Request, Response, NextFunction } from 'express';
import { compare } from 'bcryptjs';
import UserService from '../services/User.service';

const verifyCredentials = async (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;
  const invalidMessage = 'Invalid email or password';

  if (!email || !password) {
    return res.status(400).json({ message: 'All fields must be filled' });
  }

  const regex = /^[\w-_.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  if (!regex.test(email) || password.length < 6) {
    return res.status(401).json({ message: invalidMessage });
  }

  const db = await UserService.getByEmail(email);
  if (!db) return res.status(401).json({ message: invalidMessage });

  const validPasssword = await compare(password, db.password);
  if (!validPasssword) return res.status(401).json({ message: invalidMessage });

  next();
};

export default verifyCredentials;
