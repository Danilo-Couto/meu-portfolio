/*
  Warnings:

  - You are about to drop the column `role` on the `users` table. All the data in the column will be lost.
  - You are about to drop the `task_user` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `status` to the `tasks` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `tasks` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `task_user` DROP FOREIGN KEY `task_user_id_task_fkey`;

-- DropForeignKey
ALTER TABLE `task_user` DROP FOREIGN KEY `task_user_id_user_fkey`;

-- AlterTable
ALTER TABLE `tasks` ADD COLUMN `status` VARCHAR(191) NOT NULL,
    ADD COLUMN `userId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `users` DROP COLUMN `role`,
    ADD COLUMN `isAdmin` BOOLEAN NOT NULL DEFAULT false;

-- DropTable
DROP TABLE `task_user`;

-- AddForeignKey
ALTER TABLE `tasks` ADD CONSTRAINT `tasks_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
