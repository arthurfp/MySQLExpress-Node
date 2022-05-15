const queryUserName = (param) => {
    return "select * from user where user = " + params.user;
};
const queryUNP = (param) => {
    return "select * from user where user = " + params.user + " and pwd = " + params.pwd + " limit 1";
};
module.exports = {
    queryUserName,
    queryUNP
}
