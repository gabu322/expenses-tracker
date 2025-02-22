import { z } from 'zod';

export const createSessionSchema = z.object({
   userId: z.string(),
   sessionToken: z.string(),
   expires: z.date().transform((val) => {
      const parsedDate = new Date(val);
      if (isNaN(parsedDate)) throw new Error("Invalid date format.");
      return parsedDate.toISOString(); // Ensure consistent ISO format
   }),
});
