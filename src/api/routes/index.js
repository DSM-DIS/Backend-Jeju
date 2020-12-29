const router = require('express')();
const diary = require('./diary');

router.use('/diary-book', diary);

module.exports = router;