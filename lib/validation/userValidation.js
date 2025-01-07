import { z } from 'zod';

export const createUserSchema = z.object({
   name: z.string().min(3).max(255),
   email: z.string().email(),
   phone: z.string().optional(),
   cpf: z.string().length(11),
});
