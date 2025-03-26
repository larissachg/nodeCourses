/*
  Warnings:

  - You are about to drop the column `priceId` on the `Product` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `Product_priceId_fkey` ON `Product`;

-- AlterTable
ALTER TABLE `Product` DROP COLUMN `priceId`;
