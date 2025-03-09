/*
  Warnings:

  - You are about to drop the column `gate_service` on the `Request` table. All the data in the column will be lost.
  - You are about to drop the column `railing_service` on the `Request` table. All the data in the column will be lost.
  - You are about to drop the column `window_service` on the `Request` table. All the data in the column will be lost.
  - Added the required column `service_details` to the `Request` table without a default value. This is not possible if the table is not empty.
  - Added the required column `service_type` to the `Request` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Request` DROP COLUMN `gate_service`,
    DROP COLUMN `railing_service`,
    DROP COLUMN `window_service`,
    ADD COLUMN `service_details` VARCHAR(191) NOT NULL,
    ADD COLUMN `service_type` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `gates_data` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `image` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `brand` VARCHAR(191) NOT NULL,
    `sku` VARCHAR(191) NOT NULL,
    `productType` VARCHAR(191) NOT NULL,
    `category` VARCHAR(191) NOT NULL,
    `originalPrice` VARCHAR(191) NOT NULL,
    `discountedPrice` VARCHAR(191) NOT NULL,
    `discountPercentage` VARCHAR(191) NOT NULL,
    `materialGrade` VARCHAR(191) NOT NULL,
    `features` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `railing_data` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `image` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `brand` VARCHAR(191) NOT NULL,
    `sku` VARCHAR(191) NOT NULL,
    `productType` VARCHAR(191) NOT NULL,
    `category` VARCHAR(191) NOT NULL,
    `originalPrice` VARCHAR(191) NOT NULL,
    `discountedPrice` VARCHAR(191) NOT NULL,
    `discountPercentage` VARCHAR(191) NOT NULL,
    `materialGrade` VARCHAR(191) NOT NULL,
    `features` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `window_data` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `image` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `brand` VARCHAR(191) NOT NULL,
    `sku` VARCHAR(191) NOT NULL,
    `productType` VARCHAR(191) NOT NULL,
    `category` VARCHAR(191) NOT NULL,
    `originalPrice` VARCHAR(191) NOT NULL,
    `discountedPrice` VARCHAR(191) NOT NULL,
    `discountPercentage` VARCHAR(191) NOT NULL,
    `materialGrade` VARCHAR(191) NOT NULL,
    `features` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
