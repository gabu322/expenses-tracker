/*
  Warnings:

  - You are about to drop the column `type` on the `Card` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[number]` on the table `Card` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Card" DROP COLUMN "type",
ADD COLUMN     "cvv" TEXT,
ADD COLUMN     "expiration" TEXT,
ADD COLUMN     "number" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Card_number_key" ON "Card"("number");
