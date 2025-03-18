import { z } from "zod";

export const createUserSchema = z.object({
   email: z.string().email(),
   password: z.string().min(6),
   name: z.string().min(3).max(255).optional(),
   cpf: z
      .string()
      .regex(/^$|^\d{11}$|^\d{3}\.\d{3}\.\d{3}-\d{2}$/, "Invalid CPF format")
      .transform((value) => value.replace(/\D/g, ""))
      .optional(),
   phone: z
      .string()
      .regex(/^$|^\(?\d{2}\)?\ ?\d{5}-?\d{4}$/, "Invalid phone number format")
      .transform((value) => value.replace(/\D/g, ""))
      .optional(),
});
