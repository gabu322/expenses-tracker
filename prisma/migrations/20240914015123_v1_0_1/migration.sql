/*
  Warnings:

  - You are about to drop the column `acceptsPix` on the `Card` table. All the data in the column will be lost.
  - You are about to drop the column `balance` on the `Card` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Card" DROP COLUMN "acceptsPix",
DROP COLUMN "balance",
ADD COLUMN     "description" TEXT;

-- CreateTable
CREATE TABLE "DebitCard" (
    "id" SERIAL NOT NULL,
    "cardId" INTEGER NOT NULL,
    "balance" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DebitCard_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "DebitCard_cardId_key" ON "DebitCard"("cardId");

-- AddForeignKey
ALTER TABLE "DebitCard" ADD CONSTRAINT "DebitCard_cardId_fkey" FOREIGN KEY ("cardId") REFERENCES "Card"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
