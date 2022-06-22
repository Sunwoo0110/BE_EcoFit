
require("dotenv").config();

module.exports = {
    host     : 'localhost',
    user     : 'root',
    password : process.env.MYSQL_PASSWORD,
    database : 'test',
    port : 3306
};