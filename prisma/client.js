import { PrismaClient } from "@/prisma/generated/client";

export const prisma = new PrismaClient({});

if (process.env.NODE_ENV !== "production") global.prisma = prisma;

// import { PrismaClient } from "@/prisma/generated/client";

// const RETRY_LIMIT = 5; // Number of retry attempts
// const RETRY_DELAY_MS = 2000; // Delay between retries (in milliseconds)

// async function createPrismaClientWithRetry() {
//    let attempts = 0;

//    console.log("Connecting to the database...");

//    while (attempts < RETRY_LIMIT) {
//       try {
//          const prisma = new PrismaClient({});
//          await prisma.$connect(); // Try to establish a connection
//          console.log("Connected to the database successfully.");
//          return prisma; // Return the connected client
//       } catch (error) {
//          attempts++;
//          console.error(`Database connection attempt ${attempts} failed:`, error);

//          if (attempts >= RETRY_LIMIT) {
//             console.error("Exceeded retry limit. Could not connect to the database.");
//             throw error; // Throw the error after all attempts fail
//          }

//          console.log(`Retrying in ${RETRY_DELAY_MS / 1000} seconds...`);
//          await new Promise((resolve) => setTimeout(resolve, RETRY_DELAY_MS));
//       }
//    }
// }

// // Initialize Prisma client
// let prisma;
// if (!global.prisma) {
//    prisma = await createPrismaClientWithRetry();
//    if (process.env.NODE_ENV !== "production") {
//       global.prisma = prisma; // Use global to prevent reinitialization in development
//    }
// } else {
//    prisma = global.prisma;
// }

// export { prisma };
