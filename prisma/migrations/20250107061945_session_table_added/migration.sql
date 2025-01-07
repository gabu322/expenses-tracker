/*
  Warnings:

  - The values [CASH] on the enum `TransactionMethod` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `name` on the `Card` table. All the data in the column will be lost.
  - Made the column `nickname` on table `Card` required. This step will fail if there are existing NULL values in that column.
  - Made the column `userId` on table `Card` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `password` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "TransactionMethod_new" AS ENUM ('PIX', 'DEBIT', 'CREDIT');
ALTER TABLE "Transaction" ALTER COLUMN "method" TYPE "TransactionMethod_new" USING ("method"::text::"TransactionMethod_new");
ALTER TYPE "TransactionMethod" RENAME TO "TransactionMethod_old";
ALTER TYPE "TransactionMethod_new" RENAME TO "TransactionMethod";
DROP TYPE "TransactionMethod_old";
COMMIT;

-- DropForeignKey
ALTER TABLE "Card" DROP CONSTRAINT "Card_userId_fkey";

-- AlterTable
ALTER TABLE "Card" DROP COLUMN "name",
ALTER COLUMN "nickname" SET NOT NULL,
ALTER COLUMN "userId" SET NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "password" TEXT NOT NULL,
ALTER COLUMN "name" DROP NOT NULL;

-- CreateTable
CREATE TABLE "Session" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "sessionToken" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Session_sessionToken_key" ON "Session"("sessionToken");

-- AddForeignKey
ALTER TABLE "Card" ADD CONSTRAINT "Card_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
