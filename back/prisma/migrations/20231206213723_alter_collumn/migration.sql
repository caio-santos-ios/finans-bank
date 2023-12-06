/*
  Warnings:

  - You are about to drop the column `photo` on the `accounts` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "accounts" DROP COLUMN "photo",
ADD COLUMN     "photoProfile" TEXT NOT NULL DEFAULT '';
