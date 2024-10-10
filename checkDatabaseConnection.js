import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function checkDatabaseConnection() {
    try {
        // This simple query will attempt to fetch all users
        const users = await prisma.user.findMany();
        console.log('Database connection successful:', users);
    } catch (error) {
        console.error('Database connection error:', error);
    } finally {
        await prisma.$disconnect();
    }
}

checkDatabaseConnection();
