const { Router } = require("express");
const router = Router();

router.use("/", require("./root"));
router.use("/users", require("./users"))
router.use("/test", require("./test"))
router.use("/habit", require("./habit"))
router.use("/challenge", require("./challenge"))

module.exports = router;
