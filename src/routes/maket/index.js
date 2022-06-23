const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    /*
        #swagger.tags = ['maket']
        #swagger.description = 'maket 임시'
    */

    res.send('Hello, maket');
});

module.exports = router;