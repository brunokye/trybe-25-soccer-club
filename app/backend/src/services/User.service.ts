import createToken from '../utils/auth';
import { IUser } from '../utils/interfaces';

export default class UserService {
  public static async login(userCredentials: IUser): Promise<string> {
    const { email } = userCredentials;
    return createToken(email);
  }
}
