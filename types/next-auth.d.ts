import NextAuth, { DefaultSession, User as DefaultUser } from "next-auth"
import { JWT } from "next-auth/jwt"
import { Role } from "@prisma/client"

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      /** The user's role. */
      role?: Role;
    } & DefaultSession["user"];
  }

  interface User extends DefaultUser {
    role?: Role;
  }
}

declare module "next-auth/jwt" {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT {
    /** The user's role. */
    role?: Role;
  }
}
