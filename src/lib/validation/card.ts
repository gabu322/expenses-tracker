import { z } from "zod";

// TODO: better error messages
const base = {
   nickname: z.string().max(255),
   issuerId: z.string(),
   userId: z.string(),
   number: z.string().optional(),
   expiration: z.string().length(7).optional(),
   cvv: z.string().length(3).optional(),
   debit: z.boolean(),
   balance: z.number().optional(),
   credit: z.boolean(),
   limit: z.number().optional(),
   usedLimit: z.number().optional(),
};

export const CreateCardSchema = z.object(base).superRefine(validateCard);

export const UpdateCardSchema = z
   .object({
      id: z.string(),
      ...base,
      nickname: base.nickname.optional(),
      issuerId: base.issuerId.optional(),
      userId: base.userId.optional(),
      debit: base.debit.optional(),
      limit: base.limit.optional(),
   })
   .superRefine(validateCard);

// shared validation logic
function validateCard<
   T extends { debit?: boolean; balance?: number; credit?: boolean; limit?: number; usedLimit?: number }, // TODO: refine this type
>(data: T, ctx: z.RefinementCtx) {
   if (data.debit && data.balance === undefined) {
      ctx.addIssue({
         code: z.ZodIssueCode.custom,
         path: ["balance"],
         message: "Balance required",
      });
   }
   if (data.credit) {
      if (data.limit === undefined) {
         ctx.addIssue({
            code: z.ZodIssueCode.custom,
            path: ["limit"],
            message: "Credit limit required",
         });
      }
      if (data.usedLimit === undefined) {
         ctx.addIssue({
            code: z.ZodIssueCode.custom,
            path: ["usedLimit"],
            message: "Current credit required",
         });
      }
   }
}

// Inferred types
export type CardType = z.infer<typeof CreateCardSchema> & { id: string };
export type CreateCardType = z.infer<typeof CreateCardSchema>;
export type UpdateCardType = z.infer<typeof UpdateCardSchema>;
