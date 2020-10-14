const router = require('express').Router();
const qs = require('qs');

const DiaryService = require('../../services/diary');
const { Diary } = require('../../repositories');
const diaryService = new DiaryService(Diary);

const { badRequest } = require('../../errors');

// 전반적으로 인증 middleware 필요
router.get('/:id/writing', async (req, res) => {
  try {
    if (!Object.keys(req.query).length) {
      throw badRequest;
    }
    const diaryBook = parseInt(req.params.id);
    const { author } = qs.parse(req.query);

    await diaryService.writingDiary(diaryBook, author);
    res.status(200).send();
  } catch (error) {
    res.status(error.status).send({
      message: error.message,
      cause: error.cause
    });
  }
});

router.post('/:id/hand', async (req, res) => {
  const diaryBook = parseInt(req.params.id);
  const content = req.body.content;

  try {
    const page = await diaryService.handingDiary(diaryBook, content);
    // owner 변경을 하는 작업 필요
    res.status(302).redirect(`/diary/${diaryBook}/reading?page=${page}`);
  } catch (error) {
    res.status(error.status).send({
      message: error.message,
      cause: error.cause
    });
  }
});

router.get('/:id/reading', async (req, res) => {
  const diaryBook = parseInt(req.params.id);
  const page = (req.query.page) ? parseInt(qs.parse(req.query).page) : 1;

  try {
    const content = await diaryService.readingDiary(diaryBook, page);
    res.status(200).send({ page: page, content: content });
  } catch (error) {
    res.status(error.status).send({
      message: error.message,
      cause: error.cause
    });
  }
});

module.exports = router;