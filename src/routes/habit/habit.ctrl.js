const db = require("../db");
const { Router } = require("express");
const router = Router();

exports.get_root = async (req,res) => {
    /*
        #swagger.tags = ['habit']
    */
    db.query('SELECT * from Habit', (error, rows) => {
        if (error) {
            throw error;
        }
        console.log(rows);
        res.send(rows);
    });
};

// add user habit
exports.get_add_title = async (req,res) => {
    /*
        #swagger.tags = ['habit']
    */
    db.query(`INSERT INTO Habit(title, id, point, count) VALUES ("${req.params.title}", "해커톤", 0, 0)`, (error, rows) => {
        if (error) {
            res.send("fail");
            throw error;
        } 
        res.send("success");
        console.log(rows);
    });
};

// click event
exports.get_click_title = async (req,res) => {
    /*
        #swagger.tags = ['habit']
    */
    console.log(req.params)
    // change Habit count, habit
    db.query(`UPDATE Habit SET count = count + 1, point = point +4 WHERE title = "${req.params.title}"`, (error, rows) => {
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

    // change user point
    db.query(`UPDATE User SET point = point + 4 WHERE id = "해커톤"`, (error, rows) => {
        if (error) {
            res.send("fail");
            throw error;
        } 
    }); 
}
