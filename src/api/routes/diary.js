const router = require('express')();
const controller = require('../controller/diary');
const logRequest = require('../../middlewares/log');

router.get('/:id/diary/:page', logRequest, controller.getDiary);
router.post('/:id/diary', logRequest, controller.writingDiary);

module.exports = router;