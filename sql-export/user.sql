/*
Navicat MySQL Data Transfer

Source Server         : 94.191.51.170
Source Server Version : 50729
Source Host           : 94.191.51.170:3306
Source Database       : notes

Target Server Type    : MYSQL
Target Server Version : 50729
File Encoding         : 65001

Date: 2020-06-10 09:39:53
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `USERNAME` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `PASSWORD` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `HEADPORTRAIT` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `ADDTIME` datetime DEFAULT NULL,
  `EDITTIME` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('admin', '123456', '', '2020-05-08 16:19:00', '2020-05-08 16:19:00');
