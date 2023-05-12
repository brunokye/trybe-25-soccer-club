import { Request, Response } from 'express';
import UserService from '../services/User.service';

export default class UserController {
  public static async login(req: Request, res: Response): Promise<Response | void> {
    const { email, password } = req.body;

    const userCredentials = {
      email,
      password,
    };

    const token = await UserService.login(userCredentials);

    res.status(200).json({ token });
  }
}
