const express = require('express');

const router = express.Router();
const mysql = require('mysql');
const dbconfig = require('../db/DBConfig');
const userData = require('../sql/UserDatasql');
const util = require('../utils/util');
// Create a MySQL connection pool using the configuration information of DBConfig.js
const pool = mysql.createPool(dbconfig.mysql);

// Get list of user data
// eslint-disable-next-line no-unused-vars
router.post('/list', (req, res) => {
  const params = {
    user: req.body.user,
  };
  // Enable connection pool query
  pool.getConnection((_err, connection) => {
    // Check if the username exists
    // eslint-disable-next-line no-shadow
    connection.query(userData.queryUserData(params), (_err, results) => {
      if (!util.isEmpty(results)) {
        res.send({
          success: true,
          data: results,
          msg: 'Success',
        });
        connection.release();
      } else {
        res.send({
          success: false,
          data: {},
          msg: '',
        });
      }
    });
  });
});

// Insert User Data
// eslint-disable-next-line no-unused-vars
router.post('/add', (req, res) => {
  // eslint-disable-next-line no-console
  console.log(req.body);
  const params = req.body;
  // Enable connection pool query
  pool.getConnection((_err, connection) => {
    // Insert data
    // eslint-disable-next-line no-shadow
    connection.query(userData.insertData(params), (_err, results) => {
      if (!util.isEmpty(results)) {
        res.send({
          success: true,
          data: results,
          msg: 'Success',
        });
        connection.release();
      } else {
        res.send({
          success: false,
          data: {},
          msg: 'Data insertion failed',
        });
      }
    });
  });
});
module.exports = router;
