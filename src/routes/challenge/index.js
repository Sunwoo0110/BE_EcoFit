/* Challenge APIs */
const router = require("express").Router();
const ctrl = require("./challenge.ctrl");

const multer  = require('multer')
const upload = multer({ 
    dest: __dirname+'/uploads/', // 이미지 업로드 경로
}) 

// Get
router.get("/", ctrl.get_root);
router.get("/click/:title", ctrl.get_click_title);

// Put
<<<<<<< HEAD
router.put("/add/:title", ctrl.put_join);
=======
router.put("/click/:title", upload.single('img'), ctrl.put_join);
>>>>>>> a6d5b88e2a813bef6e737020a0a09cb5c27b56e1

module.exports = router;
