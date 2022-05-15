var User = {
    queryUserName: function(param) {
        return "select * from user where USERNAME = " + param.user;
    },
    queryUNP: function(param) {
        return "select * from user where USERNAME = " + param.user + " and PASSWORD = " + param.pwd + " limit 1";
    },
    insertData: function(param) {
        return "INSERT INTO user (USERNAME,PASSWORD,HEADPORTRAIT,ADDTIME,EDITTIME) VALUES ('" + param.user + "','" + param.pwd + "','" + param.headimg + "','" + param.addtime + "','" + param.edittime + "')";
    }

}
exports = module.exports = User;
