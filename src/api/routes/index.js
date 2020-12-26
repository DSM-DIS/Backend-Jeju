const router = require('express')();
const diary = require('./diary');

router.use('/diary-book/:id/diary', diary);

module.exports = router;