import { ICredentials, IUser } from '../utils/interfaces';
import UserModel from '../database/models/User.model';
import { createToken, decodeToken } from '../utils/auth';

export default class UserService {
  public static async login(userCredentials: ICredentials): Promise<string> {
    const { email } = userCredentials;
    return createToken(email);
  }

  public static async getByEmail(email: string): Promise<IUser | null> {
    const user = await UserModel.findOne({ where: { email } });
    return user;
  }

  public static async getRole(token: string): Promise<string | undefined> {
    const email = decodeToken(token);
    const user = await this.getByEmail(email);

    return user?.role;
  }
}
