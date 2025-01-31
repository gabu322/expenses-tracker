import { z } from 'zod';



export const createCardSchema = z.object({
   nickname: z.string().max(255).optional(),
   issuerId: z.number().int(),
   userId: z.number().int(),
   number: z.string().length(19).optional(),
   expiration: z.string().length(7).optional(),
   cvv: z.string().length(3).optional(),
   debit: z.boolean(),
   debitCard: z.object({ // Can accept both as a component and as a prop
      balance: z.number().optional(),
   }).optional(),
   balance: z.number().optional(),
   credit: z.boolean(),
   creditCard: z.object({ // Can accept both as a component and as a prop
      creditLimit: z.number().optional(),
      currentCredit: z.number().optional(),
   }).optional(),
   creditLimit: z.number().optional(),
   currentCredit: z.number().optional(),
});

export const updateCardSchema = z.object({
   nickname: z.string().max(255).optional(),
   issuerId: z.number().int().optional(),
   userId: z.number().int().optional(),
   number: z.string().length(19).optional(),
   expiration: z.string().length(7).optional(),
   cvv: z.string().length(3).optional(),
   debit: z.boolean().optional(),
   debitCard: z.object({
      balance: z.number().optional(),
   }).optional(),
   balance: z.number().optional(),
   credit: z.boolean().optional(),
   creditCard: z.object({
      creditLimit: z.number().optional(),
      currentCredit: z.number().optional(),
   }).optional(),
   creditLimit: z.number().optional(),
   currentCredit: z.number().optional(),
});
