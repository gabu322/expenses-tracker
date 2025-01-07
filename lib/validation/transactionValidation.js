import { z } from "zod";

export const createTransactionSchema = z.object({
   cardId: z.number().positive("Card ID must be a positive number."),
   type: z.enum(["income", "expense", "INCOME", "EXPENSE"], "Type must be 'income' or 'expense'.")
      .transform((val) => val.toUpperCase()),
   amount: z.number()
      .positive("Amount must be a positive number."),
   method: z.enum(["debit", "credit", "DEBIT", "CREDIT"], "Method must be 'debit' or 'credit'.")
      .transform((val) => val.toUpperCase()),
   date: z.string().transform((val) => {
      const parsedDate = new Date(val);
      if (isNaN(parsedDate)) throw new Error("Invalid date format.");
      return parsedDate.toISOString(); // Ensure consistent ISO format
   }),
   description: z.string().max(255, "Description is too long.").optional(),
});
