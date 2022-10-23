/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `status` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "status_name_key" ON "status"("name");
