const express = require('express');
const router = express.Router();
const url = require('url');
const mysql = require('mysql');
const dbconfig = require('../db/DBConfig');
const userData = require('../sql/UserDatasql');
const util = require('../utils/util');
// Create a MySQL connection pool using the configuration information of DBConfig.js
const pool = mysql.createPool(dbconfig.mysql);

// Get list of user data
router.post('/list', function (req, res, next) {
    const params = {
        user: req.body.user
    };
    // Enable connection pool query
    pool.getConnection(function (err, connection) {
        // Check if the username exists
        connection.query(userData.queryUserData(params), function (err, results) {
            if (!util.isEmpty(results)) {
                res.send({
                    "success": true,
                    "data": results,
                    "msg": "Success"
                });
                connection.release();
            } else {
                res.send({
                    "success": false,
                    "data": {},
                    "msg": ""
                });
            }
        });
    })
});

// Insert User Data
router.post('/add', function (req, res, next) {
    console.log(req.body)
    const params = req.body;
    // Enable connection pool query
    pool.getConnection(function (err, connection) {
        // Insert data
        connection.query(userData.insertData(params), function (err, results) {
            if (!util.isEmpty(results)) {
                res.send({
                    "success": true,
                    "data": results,
                    "msg": "Success"
                });
                connection.release();
            } else {
                res.send({
                    "success": false,
                    "data": {},
                    "msg": "Data insertion failed"
                });
            }
        });
    })
});
module.exports = router;
