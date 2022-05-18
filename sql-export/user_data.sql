/*
Navicat MySQL Data Transfer

Source Server         : 94.191.51.170
Source Server Version : 50729
Source Host           : 94.191.51.170:3306
Source Database       : notes

Target Server Type    : MYSQL
Target Server Version : 50729
File Encoding         : 65001

Date: 2020-06-10 09:40:03
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for user_data
-- ----------------------------
DROP TABLE IF EXISTS `user_data`;
CREATE TABLE `user_data` (
  `USERNAME` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `TITLE` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `CONTENT` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `ADDTIME` datetime DEFAULT NULL,
  `EDITTIME` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of user_data
-- ----------------------------
INSERT INTO `user_data` VALUES ('nmgwap', '1', '1', '2018-07-22 00:00:00', '2018-07-22 00:00:00');
INSERT INTO `user_data` VALUES ('nmgwap', 'of', 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum', '2018-07-22 00:00:00', '2018-07-22 00:00:00');
INSERT INTO `user_data` VALUES ('nmgwap', 'of', 'lorem ipsum', '2018-07-22 00:00:00', '2018-07-22 00:00:00');
INSERT INTO `user_data` VALUES ('nmgwap', 'asdasdds', 'dasasasasasasasasasasasasasas', '2018-07-22 00:00:00', '2018-07-22 00:00:00');
INSERT INTO `user_data` VALUES ('nmgwap', 'asdasdds', 'dasasasasasasasasasasasasasas', '2018-07-22 00:00:00', '2018-07-22 00:00:00');
