var express = require('express');
var router = express.Router();
var url = require('url');
var mysql = require('mysql');
var dbconfig = require('../db/DBConfig');
var user = require('../sql/Usersql');
var util = require('../utils/util');
var pool = mysql.createPool(dbconfig.mysql);

/* POST users listing. */
router.post('/userData', function(req, res, next) {
    let params = {
        user: req.body.user,
        pwd: req.body.pwd
    };
    pool.getConnection(function(err, connection) {
        connection.query(user.queryUserName(params), function(err, results) {
            if (util.isEmpty(results)) {
                connection.query(user.queryUNP(params), function(err, result) {
                    if (util.isEmpty(result)) {
                        res.send({ "success": false, "data": {}, "msg": "Request parameter error" });
                    } else {
                        if (result.length == 1) {
                            res.send({ "success": true, "data": {}, "msg": "login successful" });
                        } else {
                            res.send({ "success": false, "data": {}, "msg": "wrong user name or password" });
                        }
                    }
                });
                connection.release();
            } else {
                res.send({ "success": false, "data": {}, "msg": "Username does not exist" });
            }
        });
    })
});
module.exports = router;
