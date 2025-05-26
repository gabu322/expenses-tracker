import { z } from "zod";

// TODO: better error messages
const base = {
   name: z.string().max(255),
   description: z.string().max(500).optional(),
   icon: z.string().max(255).optional(),
   color: z.string().max(7).optional(),
};

export const createCategorySchema = z.object(base);

export const updateCategorySchema = z.object({
   id: z.string(),
   ...base,
});

export type CreateCategoryType = z.infer<typeof createCategorySchema>;
export type UpdateCategoryType = z.infer<typeof updateCategorySchema>;
