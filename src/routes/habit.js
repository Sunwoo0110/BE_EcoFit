const config = require('../config/config');
const mysql = require('mysql');

module.exports = app => {
    const connection = mysql.createConnection(config);

    connection.connect();

    const router = require('express').Router();

    // router.get('/', (req, res) => {
    //     res.send('Root');
    //     console.log("hello world")
    // });

    // router.get('/test', (req, res) => {
    //     connection.query('SELECT * from test', (error, rows) => {
    //         if (error) {
    //             throw error;
    //         }
    //         console.log('User info is: ', rows);
    //         res.send(rows);
    //     });
    // });

    

    // connection.end();

    app.use("/api/habit", router);
}