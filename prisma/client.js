import { PrismaClient } from '@prisma/client';

export const prisma =  new PrismaClient({
    omit: {
        user: {
            createdAt: true,
            updatedAt: true,
        },
        card: {
            createdAt: true,
            updatedAt: true,
        },
        creditCard: {
            createdAt: true,
            updatedAt: true,
        },
        debitCard: {
            createdAt: true,
            updatedAt: true,
        },
        transaction: {
            createdAt: true,
            updatedAt: true,
        }
    }

});

if (process.env.NODE_ENV !== 'production') global.prisma = prisma;
