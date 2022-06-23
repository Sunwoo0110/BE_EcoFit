/* Challenge APIs */
const router = require("express").Router();
const ctrl = require("./challenge.ctrl");

const multer  = require('multer')
const upload = multer({ 
    dest: __dirname+'/uploads/', // 이미지 업로드 경로
}) 

// Get
router.get("/", ctrl.get_root);
router.get("/add/:title", ctrl.get_click_title);

// Put
router.put("/click/:title", upload.single('img'), ctrl.put_join);

module.exports = router;
