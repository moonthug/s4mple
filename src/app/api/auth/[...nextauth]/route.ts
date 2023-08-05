import { UserRepository } from '@/repositories/User';
import { compare, hash } from 'bcrypt';
import NextAuth, { type NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';


export const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/auth/signin',
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        const { email, password } = credentials ?? {};

        console.log(await hash(password, 10));

        if (!email || !password) {
          throw new Error('Missing username or password');
        }

        const user = await UserRepository.findOneByEmail(email);


        if (!user || !(await compare(password, user.password))) {
          throw new Error('Invalid username or password');
        }

        return user;
      },
    }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
