/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `Tutorial` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `categoryId` to the `Tutorial` table without a default value. This is not possible if the table is not empty.
  - Added the required column `slug` to the `Tutorial` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Tutorial" ADD COLUMN     "categoryId" INTEGER NOT NULL,
ADD COLUMN     "slug" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Category" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Category_name_key" ON "Category"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Category_slug_key" ON "Category"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Tutorial_slug_key" ON "Tutorial"("slug");

-- AddForeignKey
ALTER TABLE "Tutorial" ADD CONSTRAINT "Tutorial_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
