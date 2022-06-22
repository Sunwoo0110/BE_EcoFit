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

    router.get('/', (req, res) => {
        connection.query('SELECT * from habit', (error, rows) => {
            if (error) {
                throw error;
            }
            console.log(rows);
            res.send(rows);
        });
    });

    // get habit input
    router.get('/add/:title', (req, res) => {
         // connection.query('INSERT INTO habit(title) VALUES (req.params.title)')
        connection.query('INSERT INTO habit(title, count) VALUES ("예시", 0)', (error, rows) => {
            if (error) {
                res.send("fail");
                throw error;
            } 
            res.send("success");
            console.log(rows);
        });
    });

    // add count 
    router.get('/click/:title', (req, res) => {
        //connection.query('UPDATE habit SET count = count + 1 WHERE title = req.params.title')
        connection.query('UPDATE habit SET count = count + 1 WHERE title = "sdf"', (error, rows) => {
            if (error) {
                res.send("fail");
                throw error;
            } 
            if (rows.changedRows == 0) {
                res.send("Wrong title");
            } else {
                res.send("success");
            }
            console.log(rows);
        
        });
    });


    // connection.end();

    app.use("/api/habit", router);
}