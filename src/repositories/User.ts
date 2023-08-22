import { ogm } from '@/lib/neo4j';
import { User, UserModel } from '@/models/User';


export class UserRepository {
  static async findOneByEmail(email: string) {
    // @TODO: Move this!
    await ogm.init();

    const user = await UserModel.find<User[]>({ where: { email } });
    return user[0] || null;
  }
}
