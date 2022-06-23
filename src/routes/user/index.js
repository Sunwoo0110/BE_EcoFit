const router = require('express').Router();
// const ctrl = require("./habit.ctrl");

router.get('/', (req, res) => {
    /*
        #swagger.tags = ['User']
        #swagger.description = '임시'
    */

    res.send('Hello, User');
});

module.exports = router;