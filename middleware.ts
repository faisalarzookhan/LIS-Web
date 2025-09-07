import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';

export default withAuth(
  // `withAuth` augments the `Request` object with the user's token.
  function middleware(req) {
    const token = req.nextauth.token;

    // If the user is not an admin, they should not access any admin pages.
    if (token?.role !== 'ADMIN') {
      // Redirect to a simple "Access Denied" page or the home page.
      // For now, returning a 403 Forbidden response is clear and effective.
      return new NextResponse(
        JSON.stringify({ message: 'Access Denied: You are not an administrator.' }),
        { status: 403, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // If the user is an admin, allow the request to proceed.
    return NextResponse.next();
  },
  {
    callbacks: {
      // The `authorized` callback determines if the user is allowed to access the page.
      // It runs before the middleware function above. We check for the presence of a token.
      // The actual role check is done in the middleware function for more specific control.
      authorized: ({ token }) => !!token,
    },
    // If the user is not authorized (no token), they are redirected to the login page.
    pages: {
      signIn: '/admin/login',
    },
  }
);

// The matcher configures which paths this middleware will run on.
// We apply it to all routes under /admin, except for the login page itself,
// which is handled by the redirect in the pages config.
// The matcher also implicitly excludes the /api/auth routes.
export const config = {
  matcher: ['/admin/:path*'],
};
