const db = require("../db");
const { Router } = require("express");
const router = Router();

exports.get_root = async (req,res) => {
        db.query('SELECT * from habit', (error, rows) => {
            if (error) {
                throw error;
            }
            console.log(rows);
            res.send(rows);
        });
};

exports.get_add_title = async (req,res) => {
        db.query('INSERT INTO habit(title, count) VALUES ("예시", 0)', (error, rows) => {
           if (error) {
               res.send("fail");
               throw error;
           } 
           res.send("success");
           console.log(rows);
       });
};

exports.get_click_title = async (req,res) => {
        //connection.query('UPDATE habit SET count = count + 1 WHERE title = req.params.title')
        console.log(type(res.params))
        db.query('UPDATE habit SET count = count + 1 WHERE title = "sdf"', (error, rows) => {
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
    // });
}