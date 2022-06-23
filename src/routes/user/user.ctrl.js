/* User APIs Router Controller */

const db = require("../db");
const router = require("express").Router();

exports.get_user_point = (req,res) => {
    /*
        #swagger.tags = ['User']
        #swagger.description = '사용자 이름과 포인트 조회'
    */
    db.query(`SELECT id, point from User WHERE id = "해커톤"`, (error, rows) => {
        if (error) {
            res.send("fail");
            throw error;
        }
        console.log(rows);
        res.send(rows);
    });
};

exports.get_challenged_list = (req,res) => {
    /*
        #swagger.tags = ['User']
        #swagger.description = '사용자 참여 챌린지 조회'
    */
    db.query(`SELECT challenged_list from User WHERE id = "해커톤"`, (error, rows) => {
        if (error) {
            res.send("fail");
            throw error;
        }
        console.log(rows);
        res.send(rows);
    });
};