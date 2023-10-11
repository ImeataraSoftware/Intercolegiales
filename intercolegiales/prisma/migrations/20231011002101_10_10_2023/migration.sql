/*
  Warnings:

  - You are about to drop the column `teacherId` on the `School` table. All the data in the column will be lost.
  - You are about to drop the `Modality` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `endsInscription` to the `Config` table without a default value. This is not possible if the table is not empty.
  - Added the required column `seguroLink` to the `Config` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startsInscription` to the `Config` table without a default value. This is not possible if the table is not empty.
  - Made the column `name` on table `Delegate` required. This step will fail if there are existing NULL values in that column.
  - Made the column `phone` on table `Delegate` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `cityId` to the `School` table without a default value. This is not possible if the table is not empty.
  - Added the required column `directorId` to the `School` table without a default value. This is not possible if the table is not empty.
  - Made the column `schoolId` on table `Student` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "School" DROP CONSTRAINT "School_teacherId_fkey";

-- DropForeignKey
ALTER TABLE "Student" DROP CONSTRAINT "Student_schoolId_fkey";

-- AlterTable
ALTER TABLE "City" ADD COLUMN     "postalCode" INTEGER;

-- AlterTable
ALTER TABLE "Config" ADD COLUMN     "endsInscription" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "seguroLink" TEXT NOT NULL,
ADD COLUMN     "startsInscription" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Delegate" ALTER COLUMN "name" SET NOT NULL,
ALTER COLUMN "phone" SET NOT NULL;

-- AlterTable
ALTER TABLE "School" DROP COLUMN "teacherId",
ADD COLUMN     "cityId" UUID NOT NULL,
ADD COLUMN     "directorId" UUID NOT NULL;

-- AlterTable
ALTER TABLE "Student" ALTER COLUMN "schoolId" SET NOT NULL;

-- DropTable
DROP TABLE "Modality";

-- CreateTable
CREATE TABLE "TeachersAndSchools" (
    "teacherId" UUID NOT NULL,
    "schoolId" UUID NOT NULL,
    "assignedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "assignedBy" TEXT NOT NULL,

    CONSTRAINT "TeachersAndSchools_pkey" PRIMARY KEY ("teacherId","schoolId")
);

-- CreateTable
CREATE TABLE "Sheet" (
    "id" UUID NOT NULL,
    "teacherId" UUID NOT NULL,
    "disciplineId" UUID,
    "categoriesId" UUID,
    "branchesId" UUID,
    "studentId" UUID,

    CONSTRAINT "Sheet_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Discipline" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "maxStudents" INTEGER NOT NULL,
    "mandatory" BOOLEAN NOT NULL,
    "limiting" BOOLEAN NOT NULL,

    CONSTRAINT "Discipline_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Categories" (
    "id" UUID NOT NULL,
    "sub" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "configId" UUID NOT NULL,

    CONSTRAINT "Categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DisciplineAndCategories" (
    "disciplineId" UUID NOT NULL,
    "categoriesId" UUID NOT NULL,

    CONSTRAINT "DisciplineAndCategories_pkey" PRIMARY KEY ("disciplineId","categoriesId")
);

-- CreateTable
CREATE TABLE "Branches" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "configId" UUID NOT NULL,

    CONSTRAINT "Branches_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DisciplineAndBranches" (
    "disciplineId" UUID NOT NULL,
    "branchesId" UUID NOT NULL,

    CONSTRAINT "DisciplineAndBranches_pkey" PRIMARY KEY ("disciplineId","branchesId")
);

-- AddForeignKey
ALTER TABLE "School" ADD CONSTRAINT "School_cityId_fkey" FOREIGN KEY ("cityId") REFERENCES "City"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "School" ADD CONSTRAINT "School_directorId_fkey" FOREIGN KEY ("directorId") REFERENCES "Director"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TeachersAndSchools" ADD CONSTRAINT "TeachersAndSchools_teacherId_fkey" FOREIGN KEY ("teacherId") REFERENCES "Teacher"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TeachersAndSchools" ADD CONSTRAINT "TeachersAndSchools_schoolId_fkey" FOREIGN KEY ("schoolId") REFERENCES "School"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sheet" ADD CONSTRAINT "Sheet_teacherId_fkey" FOREIGN KEY ("teacherId") REFERENCES "Teacher"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sheet" ADD CONSTRAINT "Sheet_disciplineId_fkey" FOREIGN KEY ("disciplineId") REFERENCES "Discipline"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sheet" ADD CONSTRAINT "Sheet_categoriesId_fkey" FOREIGN KEY ("categoriesId") REFERENCES "Categories"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sheet" ADD CONSTRAINT "Sheet_branchesId_fkey" FOREIGN KEY ("branchesId") REFERENCES "Branches"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sheet" ADD CONSTRAINT "Sheet_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_schoolId_fkey" FOREIGN KEY ("schoolId") REFERENCES "School"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Categories" ADD CONSTRAINT "Categories_configId_fkey" FOREIGN KEY ("configId") REFERENCES "Config"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DisciplineAndCategories" ADD CONSTRAINT "DisciplineAndCategories_disciplineId_fkey" FOREIGN KEY ("disciplineId") REFERENCES "Discipline"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DisciplineAndCategories" ADD CONSTRAINT "DisciplineAndCategories_categoriesId_fkey" FOREIGN KEY ("categoriesId") REFERENCES "Categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Branches" ADD CONSTRAINT "Branches_configId_fkey" FOREIGN KEY ("configId") REFERENCES "Config"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DisciplineAndBranches" ADD CONSTRAINT "DisciplineAndBranches_disciplineId_fkey" FOREIGN KEY ("disciplineId") REFERENCES "Discipline"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DisciplineAndBranches" ADD CONSTRAINT "DisciplineAndBranches_branchesId_fkey" FOREIGN KEY ("branchesId") REFERENCES "Branches"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
