const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    /*
        #swagger.tags = ['User']
        #swagger.description = '임시'
    */

    res.send('Hello, User');
});

module.exports = router;