import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';
import { NextResponse } from 'next/server';

/**
 * A helper function to protect API routes by checking for a valid admin session.
 * This should be called at the beginning of any admin-only API route handler.
 *
 * @returns The session object if the user is an authenticated admin, otherwise returns a NextResponse with an error.
 */
export async function protectAdminApi() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return new NextResponse(
      JSON.stringify({ message: 'Unauthorized: You must be logged in.' }),
      { status: 401, headers: { 'Content-Type': 'application/json' } }
    );
  }

  if (session.user?.role !== 'ADMIN') {
    return new NextResponse(
      JSON.stringify({ message: 'Forbidden: You do not have administrator privileges.' }),
      { status: 403, headers: { 'Content-Type': 'application/json' } }
    );
  }

  return session;
}

/**
 * Example usage in an admin API route:
 *
 * import { protectAdminApi } from '@/lib/authMiddleware';
 *
 * export async function GET() {
 *   const authResult = await protectAdminApi();
 *   if (authResult instanceof NextResponse) {
 *     return authResult; // User is not an authorized admin
 *   }
 *
 *   // ... rest of your API logic here, `authResult` is the session
 *   const products = await prisma.product.findMany();
 *   return NextResponse.json(products);
 * }
 */
