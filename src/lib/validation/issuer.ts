import { z } from "zod";

// TODO: better error messages
const base = {
   name: z.string().max(255),
   color: z.string().max(7),
   icon: z.string().optional(),
};

export const CreateIssuerSchema = z.object(base);

export const UpdateIssuerSchema = z.object({
   id: z.string(),
   ...base,
   name: base.name.optional(),
   color: base.color.optional(),
});

export type IssuerType = z.infer<typeof CreateIssuerSchema> & { id: string };
export type CreateIssuerType = z.infer<typeof CreateIssuerSchema>;
export type UpdateIssuerType = z.infer<typeof UpdateIssuerSchema>;
