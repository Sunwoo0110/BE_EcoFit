const router = require("express").Router();
const ctrl = require("./habit.ctrl");


router.get("/", ctrl.get_root);
router.put("/add/:title", ctrl.put_add_title);
router.put("/click/:title", ctrl.put_click_title);


module.exports = router;
