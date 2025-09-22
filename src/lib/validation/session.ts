import { z } from "zod";

// TODO: better error messages
export const CreateSessionSchema = z.object({
   userId: z.string(),
   sessionToken: z.string(),
   expires: z.date().transform((val) => {
      const parsedDate = new Date(val);
      // if (isNaN(parsedDate)) throw new Error("Invalid date format.");
      return parsedDate.toISOString(); // Ensure consistent ISO format
   }),
});

export type SessionType = z.infer<typeof CreateSessionSchema> & { id: string };
export type CreateSessionType = z.infer<typeof CreateSessionSchema>;
