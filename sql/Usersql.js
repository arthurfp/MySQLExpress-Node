/**
 * user table
 */
var User = {
    //Query username
    queryUserName: function (param) {
        return "select * from user where USERNAME = '" + param.user + "'";
    },
    // Query username and password
    queryUNP: function (param) {
        return "select * from user where USERNAME = '" + param.user + "' and PASSWORD = '" + param.pwd + "' limit 1";
    },
    // Insert user
    insertData: function (param) {
        return "INSERT INTO user (USERNAME,PASSWORD,HEADPORTRAIT,ADDTIME,EDITTIME) VALUES ('" + param.user + "','" + param.pwd + "','" + param.headimg + "','" + param.addtime + "','" + param.edittime + "')";
    }

}
exports = module.exports = User;
