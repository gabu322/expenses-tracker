/*
  Warnings:

  - You are about to drop the column `usedLimit` on the `CreditCard` table. All the data in the column will be lost.
  - You are about to drop the column `balance` on the `DebitCard` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `Session` table. All the data in the column will be lost.
  - You are about to drop the column `currency` on the `Transaction` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Card" ADD COLUMN     "currency" TEXT NOT NULL DEFAULT 'USD';

-- AlterTable
ALTER TABLE "CreditCard" DROP COLUMN "usedLimit",
ADD COLUMN     "initialUsedLimit" DOUBLE PRECISION NOT NULL DEFAULT 0.0;

-- AlterTable
ALTER TABLE "DebitCard" DROP COLUMN "balance",
ADD COLUMN     "initialBalance" DOUBLE PRECISION NOT NULL DEFAULT 0.0;

-- AlterTable
ALTER TABLE "Session" DROP COLUMN "status",
ADD COLUMN     "active" BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE "Transaction" DROP COLUMN "currency";
