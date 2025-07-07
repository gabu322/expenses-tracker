import { z } from "zod";

// TODO: better error messages
const base = {
   name: z.string().max(255),
   description: z.string().max(500).optional(),
   icon: z.string().max(255).optional(),
   color: z.string().max(7).optional(),
};

export const CreateCategorySchema = z.object(base);

export const UpdateCategorySchema = z.object({
   id: z.string(),
   ...base,
});

export type CategoryType = z.infer<typeof CreateCategorySchema> & { id: string };
export type CreateCategoryType = z.infer<typeof CreateCategorySchema>;
export type UpdateCategoryType = z.infer<typeof UpdateCategorySchema>;
