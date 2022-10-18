/*
  Warnings:

  - You are about to drop the column `github_id` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `github_profile` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `github_username` on the `users` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "users_github_id_key";

-- DropIndex
DROP INDEX "users_github_username_key";

-- AlterTable
ALTER TABLE "users" DROP COLUMN "github_id",
DROP COLUMN "github_profile",
DROP COLUMN "github_username";
