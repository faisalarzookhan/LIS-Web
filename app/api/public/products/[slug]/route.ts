import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const slug = params.slug;

  try {
    const product = await prisma.product.findUnique({
      where: { slug },
    });

    if (product) {
      return NextResponse.json(product);
    } else {
      return new NextResponse(JSON.stringify({ message: 'Product not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  } catch (error) {
    console.error(`Failed to fetch product with slug ${slug}:`, error);
    return new NextResponse(
      JSON.stringify({ message: 'Failed to fetch product.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
