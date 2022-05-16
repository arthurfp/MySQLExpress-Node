var express = require('express');
var router = express.Router();
var url = require('url');
var mysql = require('mysql');
var dbconfig = require('../db/DBConfig');
var userData = require('../sql/UserDatasql');
var util = require('../utils/util');
var pool = mysql.createPool(dbconfig.mysql);

/* POST users listing. */
router.post('/list', function(req, res, next) {
    let params = {
        user: req.body.user
    };
    pool.getConnection(function(err, connection) {
        connection.query(userData.queryUserData(params), function(err, results) {
            if (!util.isEmpty(results)) {
                res.send({ "success": true, "data": results, "msg": "" });
                connection.release();
            } else {
                res.send({ "success": false, "data": {}, "msg": "Username does not exist" });
            }
        });
    })
});
module.exports = router;
