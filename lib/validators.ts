import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters long." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters long." }),
});

export const reviewFormSchema = z.object({
  authorName: z.string().min(2),
  authorEmail: z.string().email(),
  rating: z.number().min(1).max(5),
  title: z.string().optional(),
  content: z.string().min(10),
  productId: z.string().optional(),
  portfolioId: z.string().optional(),
});
