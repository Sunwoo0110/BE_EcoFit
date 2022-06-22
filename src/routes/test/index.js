// const config = require('../config/config');
// const mysql = require('mysql');
const router = require('express').Router();

const db = require('../db');


router.get('/', (req, res) => {
    db.query('SELECT * from test', (error, rows) => {
        if (error) {
            throw error;
        }
        console.log('User info is: ', rows);
        res.send(rows);
    });
});

module.exports = router;
