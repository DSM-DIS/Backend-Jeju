const router = require('express')();
const controller = require('../controller/diary');

router.get('/:id/diary/:page', controller.getDiary);
router.post('/:id/diary', controller.writingDiary);

module.exports = router;