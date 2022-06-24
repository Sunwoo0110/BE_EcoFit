const router = require('express').Router();
const ctrl = require("./market.ctrl");

const multer  = require('multer')
const storage = multer.diskStorage({
    destination: (req,file,cb) => {
        cb(null, __dirname+'/uploads/');
    }, // 이미지 업로드 경로
    filename: (req, file,cb) => {
        cb(null , file.originalname);
    }
})
const upload = multer({ storage: storage}) 

/*
    [마켓]
    - market
    - 마켓 게시물 리스트 반환해줄 api
    - 마켓 해시태그 버튼 별 리스트 반환해줄 api
    - 마켓 게시물 올릴 때 보낼 정보들 받아갈 api
        - 상품이름
        - 상품가격
        - 상품설명
        - 해시태그
    - 상품명 기준 검색은 클라단에서 처리
 */

// Get
router.get("/", ctrl.get_market);
router.get('/data/image', ctrl.get_img_market);
router.get('/tag/:tag', ctrl.get_tag_market);

//post
router.post("/add", upload.single('img'), ctrl.post_add_market);

module.exports = router;