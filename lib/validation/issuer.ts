import { z } from "zod";

// TODO: better error messages
const base = {
   name: z.string().max(255),
   color: z.string().max(7),
   icon: z.string().optional(),
};

export const createIssuerSchema = z.object(base);

export const updateIssuerSchema = z.object({
   id: z.string(),
   ...base,
   icon: z.string().optional(),
});

export type CreateIssuerType = z.infer<typeof createIssuerSchema>;
export type UpdateIssuerType = z.infer<typeof updateIssuerSchema>;
