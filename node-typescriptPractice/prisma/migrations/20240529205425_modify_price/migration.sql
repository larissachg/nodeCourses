/*
  Warnings:

  - You are about to drop the `Price` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `price` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Product` DROP FOREIGN KEY `Product_priceId_fkey`;

-- AlterTable
ALTER TABLE `Product` ADD COLUMN `price` DECIMAL(65, 30) NOT NULL;

-- DropTable
DROP TABLE `Price`;
