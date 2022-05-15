var express = require('express');
var router = express.Router();
var url = require('url');
var util = require('util');
var querystring = require('querystring');
var mysql = require('mysql');
var dbconfig = require('../db/DBConfig');
var pool = mysql.createPool(dbconfig.mysql);

/* GET users listing. */
router.get('/login', function(req, res, next) {
    var params = url.parse(req.url, true).query;
    if (JSON.stringify(params) == "{}") {
        return res.send({ "success": false, "data": {}, "msg": "parameter cannot be empty" })
    }
    var userSQL = "select * from user where user = " + params.user;
    var SQL = "select * from user where user = " + params.user + " and pwd = " + params.pwd + " limit 1";
    pool.getConnection(function(err, connection) {
        connection.query(userSQL, function(err, results) {
            if (results != [] && results != "") {
                connection.query(SQL, function(err, result) {
                    if (result == undefined || result == "undefined") {
                        res.send({ "success": false, "data": {}, "msg": "interface address error" });
                    }
                    if (result.length == 1) {
                        res.send({ "success": true, "data": {}, "msg": "login successful" });
                    } else {
                        res.send({ "success": false, "data": {}, "msg": "wrong user name or password" });
                    }

                });
                connection.release();
            } else {
                res.send({ "success": false, "data": {}, "msg": "Username does not exist" });
            }

        });
    })
});
router.post('/registered', function(req, res, next) {
    var user = req.body.user;
    var pwd = req.body.pwd;
    var usersql = "select * from user where user = '" + user + "'";
    var regsql = "INSERT INTO user (user,pwd, time) VALUES ('" + user + "','" + pwd + "','" + CurentTime() + "')";
    pool.getConnection(function(err, connection) {
        connection.query(usersql, function(err, results) {
            if (results == "") {
                connection.query(regsql, function(err, result) {
                    if (result != [] && result != "") {
                        res.send({ "success": true, "data": {}, "msg": "registration success" });
                    }
                });
                connection.release();
            } else {
                res.send({ "success": false, "data": {}, "msg": "username already exists" });
            }
        });
    });
});


function CurentTime() {
    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth() + 1;
    var day = now.getDate();
    var hh = now.getHours();
    var mm = now.getMinutes();
    var clock = year + "-";
    if (month < 10)
        clock += "0";
    clock += month + "-";
    if (day < 10)
        clock += "0";
    clock += day + " ";
    if (hh < 10)
        clock += "0";
    clock += hh + ":";
    if (mm < 10) clock += '0';
    clock += mm;
    return (clock);
}
module.exports = router;
