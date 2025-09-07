import NextAuth, { AuthOptions } from 'next-auth';
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
        // This is a mock authorization. In a real app, you would:
        // 1. Find the user in the database with prisma.user.findUnique({ where: { email: credentials.email }})
        // 2. Compare the hashed password with bcrypt.compare()

        if (credentials?.email === 'admin@limitless.com' && credentials?.password === 'password') {
          // Return a mock user object that matches the Prisma User model structure
          const mockUser: User = {
              id: 'admin-user-id-12345',
              email: 'admin@limitless.com',
              name: 'Admin',
              role: Role.ADMIN,
              password: null, // Never return the password hash
              createdAt: new Date(),
              updatedAt: new Date(),
          };
          return mockUser;
        }

        // Return null if user data could not be retrieved
        return null;
      }
    })
  ],
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwt({ token, user }) {
      // When the user signs in, the `user` object is available.
      // Persist the user's role to the token.
      if (user) {
        token.role = user.role;
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      // Add the custom properties from the token to the session object.
      if (session.user) {
        session.user.role = token.role;
        // It's good practice to not expose the user ID to the client session
        // unless necessary. For now, we omit it.
      }
      return session;
    }
  },
  pages: {
    signIn: '/admin/login',
    error: '/admin/login', // On error, redirect back to the login page
  }
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
