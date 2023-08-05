import { ogm } from '@/lib/neo4j';


export type User = {
  id: string;
  email: string;
  password: string;
}

export const UserModel = ogm.model('User');
