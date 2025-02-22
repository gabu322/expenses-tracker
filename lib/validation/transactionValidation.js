import { z } from "zod";

export const createTransactionSchema = z.object({
   type: z.enum(["income", "expense", "INCOME", "EXPENSE"], "Type must be 'income' or 'expense'.").transform((val) => val.toUpperCase()),
   amount: z.number().positive("Amount must be a positive number."),
   date: z.string().transform((val) => {
      const parsedDate = new Date(val);
      if (isNaN(parsedDate)) throw new Error("Invalid date format.");
      return parsedDate.toISOString(); // Ensure consistent ISO format
   }),
   method: z.enum(["debit", "credit", "DEBIT", "CREDIT"], "Method must be 'debit' or 'credit'.").transform((val) => val.toUpperCase()),
   cardId: z.string(),
   userId: z.string(),
   description: z.string().max(255, "Description is too long.").optional(),
});
