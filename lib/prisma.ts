import { PrismaClient } from '@prisma/client';

// In a Next.js environment, `global` is used to preserve a value across module reloads
// caused by HMR (Hot Module Replacement). This prevents creating a new PrismaClient instance
// on every reload in development, which can exhaust the database connection limit.

declare global {
  // allow global `var` declarations
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

const prisma =
  global.prisma ||
  new PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
  });

if (process.env.NODE_ENV !== 'production') {
  global.prisma = prisma;
}

export default prisma;
