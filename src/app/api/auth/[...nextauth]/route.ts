import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { compare } from 'bcrypt';
import { sql } from '@vercel/postgres';

const handler = NextAuth({
  session: { strategy: 'jwt' },
  providers: [
    CredentialsProvider({
      credentials: {
        emailOrUsername: {},
        password: {},
      },
      async authorize(credentials, req) {
        const response = await sql`
        SELECT * FROM users 
        WHERE email=${credentials?.emailOrUsername}
        OR username=${credentials?.emailOrUsername}
        `;
        const user = response.rows[0];
        console.log(user);

        const passwordCorrect = await compare(
          credentials?.password ?? '',
          user.password
        );
        if (passwordCorrect) {
          return {
            id: user.id,
            email: user.email,
            username: user.username,
          };
        }
        return null;
      },
    }),
  ],
});

export { handler as GET, handler as POST };
