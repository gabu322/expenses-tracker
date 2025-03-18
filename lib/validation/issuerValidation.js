import { z } from "zod";

export const createIssuerSchema = z.object({
   name: z.string(),
   color: z.string(),
   icon: z.string().optional(),
});

export const updateIssuerSchema = z.object({
   name: z.string().optional(),
   color: z.string().optional(),
   icon: z.string().optional(),
});
