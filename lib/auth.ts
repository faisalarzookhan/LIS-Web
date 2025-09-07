import { AuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { User, Role } from '@prisma/client';

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "email", placeholder: "admin@limitless.com" },
        password: {  label: "Password", type: "password", placeholder: "password" }
      },
      async authorize(credentials) {
        // This is a mock authorization. In a real app, you would use Prisma and bcrypt.
        if (credentials?.email === 'admin@limitless.com' && credentials?.password === 'password') {
          const mockUser: User = {
              id: 'admin-user-id-12345',
              email: 'admin@limitless.com',
              name: 'Admin',
              role: Role.ADMIN,
              password: null,
              createdAt: new Date(),
              updatedAt: new Date(),
          };
          return mockUser;
        }
        return null;
      }
    })
  ],
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.role = token.role;
      }
      return session;
    }
  },
  pages: {
    signIn: '/admin/login',
    error: '/admin/login',
  }
};
