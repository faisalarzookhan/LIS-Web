import { NextResponse } from 'next/server';
import { protectAdminApi } from '@/lib/authMiddleware';
import prisma from '@/lib/prisma';
import { z } from 'zod';

// Schema for validating new product creation
const productSchema = z.object({
  title: z.string().min(3),
  slug: z.string().min(3).regex(/^[a-z0-9-]+$/, { message: "Slug must be lowercase with dashes only." }),
  shortDesc: z.string().min(10),
  longDesc: z.string().optional(),
});

export async function GET() {
  const authResult = await protectAdminApi();
  if (authResult instanceof NextResponse) {
    return authResult;
  }

  try {
    const products = await prisma.product.findMany({ orderBy: { createdAt: 'desc' } });
    return NextResponse.json(products);
  } catch (error) {
    console.error("Admin failed to fetch products:", error);
    return new NextResponse(JSON.stringify({ message: 'Failed to fetch products.' }), { status: 500 });
  }
}

export async function POST(request: Request) {
    const authResult = await protectAdminApi();
    if (authResult instanceof NextResponse) {
        return authResult;
    }

    try {
        const body = await request.json();
        const validatedData = productSchema.parse(body);

        const newProduct = await prisma.product.create({
            data: {
                title: validatedData.title,
                slug: validatedData.slug,
                shortDesc: validatedData.shortDesc,
                longDesc: validatedData.longDesc,
            },
        });

        return NextResponse.json(newProduct, { status: 201 });

    } catch (error) {
        if (error instanceof z.ZodError) {
            return new NextResponse(JSON.stringify({ message: 'Invalid product data', errors: error.issues }), { status: 400 });
        }
        // Handle potential unique constraint errors from Prisma (e.g., duplicate slug)
        if (error instanceof Error && 'code' in error && error.code === 'P2002') {
            return new NextResponse(JSON.stringify({ message: 'A product with this slug already exists.' }), { status: 409 });
        }
        console.error("Admin failed to create product:", error);
        return new NextResponse(JSON.stringify({ message: 'Failed to create product.' }), { status: 500 });
    }
}
