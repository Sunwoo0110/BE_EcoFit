const router = require('express').Router();
const ctrl = require("./user.ctrl");

// GET
router.get("/point", ctrl.get_user_point);
router.get("/list", ctrl.get_challenged_list);

module.exports = router;