/* Habbit APIs Router Controller */

const db = require("../db");
const router = require("express").Router();

exports.get_habit = (req,res) => {
    /*
        #swagger.tags = ['Habit']
        #swagger.description = '습관을 조회하는 기초 API, 테스트용도'
    */
    db.query('SELECT * from Habit', (error, rows) => {
        if (error) {
            throw error;
        }
        console.log(rows);
        res.send(rows);
    });
};

// change user habit
exports.put_add_habit = (req,res) => {
    /*
        #swagger.tags = ['Habit']
        #swagger.description = '습관을 변경해주는 API입니다. 매개변수 title을 입력하여, 습관을 변경할수 있습니다.'
        #swagger.parameters['newtitle'] = { description: '습관을 변경하기 위해 필요한 PK' }
        #swagger.parameters['oldtitle'] = { description: '습관을 변경하기 위해 필요한 PK' }
        
    */
    // db.query(`INSERT INTO Habit(title, id, point, count) VALUES ("${req.params.title}", "해커톤", 0, 0)`, (error, rows) => {
    //     if (error) {
    //         res.send("fail");
    //         throw error;
    //     } 
    //     res.send("success");
    //     console.log(rows);
    // });
    db.query(`UPDATE Habit SET title = "${req.params.newtitle}" WHERE title = "${req.params.oldtitle}"`, (error, rows) => {
        if (error) {
            res.send("fail");
            throw error;
        } 
        res.send("success");
        console.log(rows);
    });
};

// click event
exports.put_click_title = (req, res) => {
    /*
        #swagger.tags = ['Habit']
        #swagger.description = '습관을 클릭하면, count를 올려주는 API, 클릭할때마다 1씩 증가'
        #swagger.parameters['title'] = { description: '습관을 검색하기 위해 필요한 PK' }
    */
    console.log(req.params)
    // change Habit count, point
    db.query(`UPDATE Habit SET count = count + 1, point = point + 4 WHERE title = "${req.params.title}"`, (error, rows) => {
        if (error) {
            res.send("fail");
            throw error;
        } 
        if (rows.changedRows == 0) {
            res.send("Wrong title");
        } else {
            db.query(`SELECT count, point from Habit WHERE title = "${req.params.title}"`, (error, rows) => {res.send(rows)} );
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
