const express = require("express");
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require("../swagger-output.json");

/* TODO
    url에 api 붙이기
    추가 api 
    포인트 받기 -> 반환값 (count 올리기, 포인트 올리기 4p) db 수정

    챌린지
    챌린지 버튼 -> 이미지 api
    챌린지 인증 -> db 추가 -> response ㄴ
    마이페이지 db 에 넣기

    마켓
    마켓 정보 반환
    해쉬테그 1개
    상품 등록 사진, 이름, 가격, 설명, 해쉬테그

    마이페이지
    이름, 포인트, 활동내역 반환
*/

class App {
    constructor() {
        
        this.app = express();

        this.middleware();

        // body 받기
        this.bodyParsing();

        // 라우팅
        this.getRouting();

        // // 404 error
        this.status404();

        // // 에러처리
        this.errorHandler();
    }

    middleware() {
        this.app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));
    }
    
    bodyParsing() {
        // var multer = require('multer');
        // var forms = multer();
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        // this.app.use(forms.array());
    }

    getRouting() {
        this.app.use(require("./routes"));
    }

    status404() {
        this.app.use((req, res, _) => {
            res.status(404).send("Error Code 400");
        });
    }

    errorHandler() {
        this.app.use((errreq, res, _) => {
            res.status(500).send("Error Code 400");
        });
    }

}



module.exports = new App().app;