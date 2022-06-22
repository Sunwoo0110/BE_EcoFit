require("dotenv").config();

module.exports = {
    host : '118.67.133.207',
    user : 'ecofit',
    password : process.env.MYSQL_PASSWORD,
    database : 'ecofit',
    port : '3306'
};