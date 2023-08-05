import { User, UserModel } from '@/models/User';

export class UserRepository {
    static async findOneByEmail(email: string) {
      const user = await UserModel.find<User[]>({ where: { email }});
      return user[0] || null;
    }
}
