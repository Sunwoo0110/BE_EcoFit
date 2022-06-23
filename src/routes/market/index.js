const router = require('express').Router();
// const ctrl = require("./habit.ctrl");

router.get('/', (req, res) => {
    /*
        #swagger.tags = ['market']
        #swagger.description = 'market 임시'
    */

    res.send('Hello, market');
});

module.exports = router;