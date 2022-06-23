/* Challenge APIs */
const router = require("express").Router();
const ctrl = require("./challenge.ctrl");

// Get
router.get("/", ctrl.get_root);
router.get("/click/:title", ctrl.get_click_title);

// Put
router.put("/add/:title", ctrl.put_join);

module.exports = router;
