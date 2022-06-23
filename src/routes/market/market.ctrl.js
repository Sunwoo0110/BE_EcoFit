const { Console } = require("console");
const db = require("../db")


exports.get_market = (req, res) => {
    /*
        #swagger.tags = ['Market']
        #swagger.description = '마켓의 상품들을 검색하는 API'
    */
    db.query('SELECT * from Market', (error, rows) => {
        if (error) {
            res.send("fail");
            throw error;
        }
        console.log(rows);
        res.send(rows);
    })
}

exports.post_add_market = (req, res) => {
    /*
        #swagger.tags = ['Market']
        #swagger.description = '마켓의 상품을 추가하기 위한 API'
        #swagger.parameters['name'] = { description: '상품 검색을 위해 필요한 PK' }
        #swagger.parameters['price'] = { description: '가격' }
        #swagger.parameters['explanation'] = { description: '상품설명' }
        #swagger.parameters['hashTag'] = { description: 'hashTag' }
        #swagger.parameters['image'] = { description: 'imge파일' }
    */
    db.query(
        `INSERT INTO Market (name, price, explanation, hashTag, image) VALUES ("${req.body.name}", ${req.body.price}, "${req.body.explanation}", "${req.body.hashtag}", "${req.file.path}");`, 
            (error, rows) => {
        if (error) {
            res.send("fail");
            throw error;
        }
        console.log(rows);
        res.send("success");
    })
}   


// 임시 API 향후 기능에 따라 변경 (예시)
exports.get_img_market = (req,res,next) => {

    // local의 파일을 불러오기위한 Module 여기서만 사용되니 local로 선언
    const fs = require('fs');

    db.query(
        'select image from Market', (error, rows) => {
            if (error) {
                throw error;
            }
            console.log(rows[1]['image']);
            fs.readFile(rows[1]['image'], (error, data)=>{
                res.writeHead(200, {"Context-Type":"image/jpg"});
                res.write(data);
                res.end();
            })
        }
    )
}

