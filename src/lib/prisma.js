import { PrismaClient } from "@prisma/generated/client";

export const prisma = new PrismaClient({ errorFormat: "minimal" });

if (process.env.NODE_ENV !== "production") global.prisma = prisma;
