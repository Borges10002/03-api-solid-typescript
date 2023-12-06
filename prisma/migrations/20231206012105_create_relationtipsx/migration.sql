/*
  Warnings:

  - You are about to drop the column `create_at` on the `check_ins` table. All the data in the column will be lost.
  - You are about to drop the column `valited_at` on the `check_ins` table. All the data in the column will be lost.
  - Added the required column `gym_id` to the `check_ins` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `check_ins` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'MEMBER');

-- AlterTable
ALTER TABLE "check_ins" DROP COLUMN "create_at",
DROP COLUMN "valited_at",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "gym_id" TEXT NOT NULL,
ADD COLUMN     "user_id" TEXT NOT NULL,
ADD COLUMN     "validated_at" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'MEMBER';

-- AddForeignKey
ALTER TABLE "check_ins" ADD CONSTRAINT "check_ins_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "check_ins" ADD CONSTRAINT "check_ins_gym_id_fkey" FOREIGN KEY ("gym_id") REFERENCES "gyms"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
