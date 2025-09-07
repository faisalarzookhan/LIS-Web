import { NextResponse } from 'next/server';
import { contactFormSchema } from '@/lib/validators';
import prisma from '@/lib/prisma';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedData = contactFormSchema.parse(body);

    // Persist the contact form submission as an analytics event
    await prisma.analyticsEvent.create({
      data: {
        type: 'CONTACT_FORM_SUBMISSION',
        payload: {
          name: validatedData.name,
          email: validatedData.email,
          // Storing the message itself might have privacy implications.
          // For this example, we'll store a truncated version or just a flag.
          messageLength: validatedData.message.length,
        },
      },
    });

    return NextResponse.json({ message: 'Your message has been sent successfully!' }, { status: 200 });

  } catch (error) {
    if (error instanceof Error && 'issues' in error) {
      return new NextResponse(JSON.stringify({ message: 'Invalid form data', errors: (error as any).issues }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    console.error("Contact form submission error:", error);
    return new NextResponse(JSON.stringify({ message: 'An unexpected error occurred.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
