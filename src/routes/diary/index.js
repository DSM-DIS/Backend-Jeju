const router = require('express')();
const controller = require('./controller');

router.get('/:page', controller.getDiary);
router.post('/', controller.writingDiary);

module.exports = router;