import { z } from 'zod';

export const createIssuerSchema = z.object({
   name: z.string(),
   email: z.string().email(),
   password: z.string(),
   role: z.string(),
});

export const updateIssuerSchema = z.object({
   name: z.string().optional(),
   email: z.string().email().optional(),
   password: z.string().optional(),
   role: z.string().optional(),
});
