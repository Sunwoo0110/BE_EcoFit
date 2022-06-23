const db = require("../db");
const { Router } = require("express");
const router = Router();

exports.get_root = async (req,res) => {
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
    db.query(`INSERT INTO Habit(title, id, point, count) VALUES ("${req.params.title}", "해커톤", 0)`, (error, rows) => {
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

// 추가 api 
// 포인트 받기 -> 반환값 (count 올리기, 포인트 올리기 4p) db 수정

// 챌린지
// 챌린지 버튼 -> 이미지 api
// 챌린지 인증 -> db 추가 -> response ㄴ
//  마이페이지 db 에 넣기

// 마켓
// 마켓 정보 반환
// 해쉬테그 1개
// 상품 등록 사진, 이름, 가격, 설명, 해쉬테그

// 마이페이지
// 이름, 포인트, 활동내역 반환