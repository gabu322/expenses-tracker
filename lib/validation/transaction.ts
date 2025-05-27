import { z } from "zod";

// TODO: better error messages
const base = {
   cardId: z.string(),
   userId: z.string(),
   amount: z.number().positive("Amount must be a positive number."),
   date: z.string().transform((val) => {
      const parsedDate = new Date(val);
      if (isNaN(parsedDate.getTime())) throw new Error("Invalid date format.");
      return parsedDate.toISOString(); // Ensure consistent ISO format
   }),
   description: z.string().max(255, "Description is too long.").optional(),
   type: z
      .enum(["income", "expense", "INCOME", "EXPENSE"])
      .refine((val) => ["income", "expense", "INCOME", "EXPENSE"].includes(val), {
         message: "Type must be 'income' or 'expense'.",
      })
      .transform((val) => val.toUpperCase()),
   method: z
      .enum(["debit", "credit", "DEBIT", "CREDIT"])
      .refine((val) => ["debit", "credit", "DEBIT", "CREDIT"].includes(val), {
         message: "Method must be 'debit' or 'credit'.",
      })
      .transform((val) => val.toUpperCase()),
};

export const CreateTransactionSchema = z.object(base);

export const UpdateTransactionSchema = z.object({
   id: z.string(),
   ...base,
   cardId: base.cardId.optional(),
   userId: base.userId.optional(),
   amount: base.amount.optional(),
   date: base.date.optional(),
   description: base.description.optional(),
   type: base.type.optional(),
   method: base.method.optional(),
});

export type TransactionType = z.infer<typeof CreateTransactionSchema> & { id: string };
export type CreateTransactionType = z.infer<typeof CreateTransactionSchema>;
export type UpdateTransactionType = z.infer<typeof UpdateTransactionSchema>;
