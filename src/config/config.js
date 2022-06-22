
require("dotenv").config();

module.exports = {
    host : 'localhost',
    user : 'root',
    password : process.env.MYSQL_PASSWORD,
    database : 'echo_fit',
    port : '3306'
};