/* Habbit APIs Router */
const router = require("express").Router();
const ctrl = require("./habit.ctrl");


// Get
router.get("/", ctrl.get_habit);

//Put
router.put("/add/:num/:newtitle", ctrl.put_add_habit);
router.put("/click/:title", ctrl.put_click_title);


module.exports = router;
