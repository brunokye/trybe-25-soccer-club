import { Credentials, User } from '../utils/types';
import UserModel from '../database/models/User.model';
import { createToken, decodeToken } from '../utils/auth';

export default class UserService {
  public static async login(userCredentials: Credentials): Promise<string> {
    const { email } = userCredentials;
    return createToken(email);
  }

  public static async getByEmail(email: string): Promise<User | null> {
    const user = await UserModel.findOne({ where: { email } });
    return user;
  }

  public static async getRole(token: string): Promise<string | undefined> {
    const email = decodeToken(token);
    const user = await this.getByEmail(email);

    return user?.role;
  }
}
