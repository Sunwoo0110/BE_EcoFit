/* Challenge APIs */
const router = require("express").Router();
const ctrl = require("./challenge.ctrl");

// Get
router.get("/", ctrl.get_root);
router.get("/add/:title", ctrl.get_click_title);

// Put
router.put("/click/:title", ctrl.put_join);

module.exports = router;
