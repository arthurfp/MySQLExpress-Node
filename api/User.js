const express = require('express');

const router = express.Router();
const mysql = require('mysql');
const dbconfig = require('../db/DBConfig');
const user = require('../sql/Usersql');
const util = require('../utils/util');
// Create a MySQL connection pool using the configuration information of DBConfig.js
const pool = mysql.createPool(dbconfig.mysql);

// User Login
router.post('/login', (req, res) => {
  const params = {
    user: req.body.user,
    pwd: req.body.pwd,
  };
  // Enable connection pool query
  pool.getConnection((err, connection) => {
    // Check if the username exists
    connection.query(user.queryUserName(params), (_error, results) => {
      console.log(results);
      if (!util.isEmpty(results)) {
        // Query whether the username and password are correct
        connection.query(user.queryUNP(params), (_err, result) => {
          if (util.isEmpty(result)) {
            res.send({
              success: false,
              data: {},
              msg: 'Incorrect username or password',
            });
          } else if (result.length === 1) {
            res.send({
              success: true,
              data: {},
              msg: 'Successfully logged in',
            });
          } else {
            res.send({
              success: false,
              data: {},
              msg: 'Incorrect username or password',
            });
          }
        });
        connection.release();
      } else {
        res.send({
          success: false,
          data: {},
          msg: 'Username does not exist',
        });
      }
    });
  });
});

// Register User
// eslint-disable-next-line no-unused-vars
router.post('/registered', (req, res) => {
  const params = {
    user: req.body.user,
    pwd: req.body.pwd,
    headimg: req.body.headimg || '',
    addtime: util.CurentTime(),
    edittime: util.CurentTime(),
  };
  // Enable connection pool query
  pool.getConnection((error, connection) => {
    // Check if the username exists
    connection.query(user.queryUserName(params), (_error, results) => {
      if (util.isEmpty(results)) {
        // Insert username and password
        connection.query(user.insertData(params), (_err, result) => {
          if (!util.isEmpty(result)) {
            res.send({
              success: true,
              data: {},
              msg: 'Success',
            });
          } else {
            res.send({
              success: false,
              data: {},
              msg: 'Invalid parameter input',
            });
          }
        });
        connection.release();
      } else {
        res.send({
          success: false,
          data: {},
          msg: 'Username already exists',
        });
      }
    });
  });
});

module.exports = router;
