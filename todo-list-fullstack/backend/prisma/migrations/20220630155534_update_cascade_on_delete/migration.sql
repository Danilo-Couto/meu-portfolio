-- DropForeignKey
ALTER TABLE `task_user` DROP FOREIGN KEY `task_user_id_task_fkey`;

-- DropForeignKey
ALTER TABLE `task_user` DROP FOREIGN KEY `task_user_id_user_fkey`;

-- AddForeignKey
ALTER TABLE `task_user` ADD CONSTRAINT `task_user_id_task_fkey` FOREIGN KEY (`id_task`) REFERENCES `tasks`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `task_user` ADD CONSTRAINT `task_user_id_user_fkey` FOREIGN KEY (`id_user`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
