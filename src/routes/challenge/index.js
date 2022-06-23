const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    /*
        #swagger.tags = ['challenge']
        #swagger.description = 'challenge 임시'
    */

    res.send('Hello, challenge');
});

module.exports = router;