import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
  try {
    const products = await prisma.product.findMany({
      // We can add more options here, like ordering or selecting specific fields
      orderBy: {
        createdAt: 'desc',
      },
    });
    return NextResponse.json(products);
  } catch (error) {
    console.error("Failed to fetch products:", error);
    return new NextResponse(
      JSON.stringify({ message: 'Failed to fetch products.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
