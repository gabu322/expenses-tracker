import { z } from "zod";

// TODO: better error messages
const base = {
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
};

export const CreateUserSchema = z.object(base);

export const UpdateUserSchema = z.object({
   id: z.string(),
   ...base,
   email: base.email.optional(),
   password: base.password.optional(),
   name: base.name.optional(),
   cpf: base.cpf.optional(),
   phone: base.phone.optional(),
});

export type UserType = z.infer<typeof CreateUserSchema> & { id: string };
export type CreateUserType = z.infer<typeof CreateUserSchema>;
export type UpdateUserType = z.infer<typeof UpdateUserSchema>;
