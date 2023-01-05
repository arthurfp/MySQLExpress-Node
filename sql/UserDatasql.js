/**
 * user_data table
 */
const UserData = {
  // Check the data according to the user
  queryUserData(param) {
    return `select USERNAME as userName,TITLE as title,CONTENT as content,EDITTIME as editTime  from user_data where USERNAME = '${param.user}'`;
  },
  // Delete the data corresponding to the ID
  deleteData(param) {
    return `DELETE from user_data where ID = ${param.ID}`;
  },
  // Insert user_data
  insertData(param) {
    return `INSERT INTO user_data (USERNAME,TITLE,CONTENT,ADDTIME,EDITTIME) VALUES ('${param.user}','${param.title}','${param.content}','${param.addtime}','${param.edittime}')`;
  },

};
module.exports = UserData;
