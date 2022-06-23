const router = require('express').Router();
// const ctrl = require("./habit.ctrl");

router.get('/', (req, res) => {
    /*
        #swagger.tags = ['challenge']
        #swagger.description = 'challenge 임시'
    */

    res.send('Hello, challenge');
});

module.exports = router;