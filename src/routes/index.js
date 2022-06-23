const router = require("express").Router();


router.use("/", 
    (req, res) => res.send("여기는 Root URL입니다. 정확하게 URL을 입력해주세요."));


router.use("challenge", require("./challenge"))
router.use("/habit", require("./habit"))
router.use("/maket", require("./maket"))
router.use("/user", require("./user"))



module.exports = router;
