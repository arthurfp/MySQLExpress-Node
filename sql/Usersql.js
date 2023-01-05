/**
 * user table
 */
const User = {
  // Query username
  queryUserName(param) {
    return `select * from user where USERNAME = '${param.user}'`;
  },
  // Query username and password
  queryUNP(param) {
    return `select * from user where USERNAME = '${param.user}' and PASSWORD = '${param.pwd}' limit 1`;
  },
  // Insert user
  insertData(param) {
    return `INSERT INTO user (USERNAME,PASSWORD,HEADPORTRAIT,ADDTIME,EDITTIME) VALUES ('${param.user}','${param.pwd}','${param.headimg}','${param.addtime}','${param.edittime}')`;
  },

};
module.exports = User;
