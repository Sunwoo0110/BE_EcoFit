const config = require('../config/config');
const mysql = require('mysql');
const connection = mysql.createConnection(config);

module.exports = app => {

    connection.connect();

    const router = require('express').Router();

    router.get('/', (req, res) => {
        res.send('Root');
        console.log("hello world")
    });

    router.get('/users', (req, res) => {
        connection.query('SELECT * from test', (error, rows) => {
            if (error) {
                throw error;
            }
            console.log('User info is: ', rows);
            res.send(rows);
        });
    });

    app.use("/api/test", router);
}