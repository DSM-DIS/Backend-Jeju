const router = require('express').Router();

const diaryRouter = require('./routes/diaryRouter');

router.use('/diary', diaryRouter);

module.exports = router;
