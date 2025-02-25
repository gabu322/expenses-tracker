import { z } from 'zod';

export const createCardSchema = z.object({
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
}).superRefine((data, ctx) => {
   // Validate that balance exists if debit is true
   if (data.debit && data.balance === undefined) {
      ctx.addIssue({
         path: ['balance'],
         message: 'Balance required',
      });
   }

   if (data.credit) {
      if (data.limit === undefined) {
         ctx.addIssue({
            path: ['limit'], message: 'Credit limit required'
         });
      }

      if (data.usedLimit === undefined) {
         ctx.addIssue({
            path: ['usedLimit'],
            message: 'Current credit required'
         });
      }
   }
});

export const updateCardSchema = z.object({
   nickname: z.string().max(255).optional(),
   issuerId: z.string().optional(),
   userId: z.string().optional(),
   number: z.string().optional(),
   expiration: z.string().length(7).optional(),
   cvv: z.string().length(3).optional(),
   debit: z.boolean(),
   balance: z.number().optional(),
   credit: z.boolean(),
   limit: z.number().optional(),
   usedLimit: z.number().optional(),
}).superRefine((data, ctx) => {
   console.log("here", data);

   // Validate that balance exists if debit is true
   if (data.debit && data.balance === undefined) {
      ctx.addIssue({
         path: ['balance'],
         message: 'Balance required',
      });
   }

   if (data.credit) {
      if (data.limit === undefined) {
         ctx.addIssue({
            path: ['limit'], message: 'Credit limit required'
         });
      }

      if (data.usedLimit === undefined) {
         ctx.addIssue({
            path: ['usedLimit'],
            message: 'Current credit required'
         });
      }
   }
});
