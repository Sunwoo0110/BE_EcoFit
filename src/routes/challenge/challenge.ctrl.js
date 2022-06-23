/* Challenge APIs Router Controller */
const db = require("../db");

exports.get_root = (req,res) => {
    /*
        #swagger.tags = ['challenge']
        #swagger.description = '챌린지를 조회하는 기초 API, 테스트용도'
    */
    db.query('SELECT * from Challenge', (error, rows) => {
        if (error) {
            throw error;
        }
        console.log(rows);
        res.send(rows);
    });
};

// click challenge
exports.get_click_title = (req,res) => {
    /*
        #swagger.tags = ['challenge']
        #swagger.description = '선택된 챌린지의 인증 사진들을 반환하는 API입니다. 매개변수 title을 입력하여, 인증 사진을 받을 수 있습니다.'
        #swagger.parameters['title'] = { description: 'test' }
    */
    console.log(req.params)
    // send image json  
    db.query(`SELECT image from Challenge where title = "${req.params.title}"`, (error, rows) => {
        if (error) {
            throw error;
        }
        console.log(rows);
        res.send(rows);
    });

}

// join challenge
exports.put_join = (req,res) => {
    /*
        #swagger.tags = ['challenge']
        #swagger.description = '챌린지 인증을 추가하는 API입니다. 매개변수 title을 입력하여, 챌린지를 참여할 수 있습니다.'
        #swagger.parameters['title'] = { description: 'test' }
    */
    db.query(`UPDATE Challenge SET count = count + 1, image = JSON_ARRAY_APPEND(image, '$', "${req.file.path}") WHERE title = "${req.params.title}"`, (error, rows) => {
        if (error) {
            res.send("fail");
            throw error;
        } 
        if (rows.affectedRows == 0) {
            res.send("Wrong title");
        } else {
            res.send("success");
        }
        console.log(rows);
    }); 

    // add user challenge list
    db.query(`UPDATE User SET challenged_list = JSON_ARRAY_APPEND(challenged_list, '$', "${req.params.title}")  WHERE id = "해커톤"` , (error, rows) => {
        if (error) {
            res.send("fail");
            throw error;
        }
        // console.log(rows);
        // res.send(rows);
    });
}