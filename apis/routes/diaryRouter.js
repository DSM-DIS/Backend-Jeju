const router = require('express').Router();
const qs = require('qs');

const DiaryService = require('../../services/diary');
const { Diary } = require('../../models');
const diaryService = new DiaryService(Diary);

// 전반적으로 인증 middleware 필요
router.get('/:id/writing', async (req, res) => {
  const diaryBook = parseInt(req.params.id);
  const { author } = qs.parse(req.query);

  const id = await diaryService.writingDiary(diaryBook, author);

  res.status(200).json({ id: id });
});

router.post('/:id/hand', async (req, res) => {
  const diaryBook = parseInt(req.params.id);
  const { id, content } = req.body;

  const page = await diaryService.handingDiary(diaryBook, id, content);

  // owner 변경을 하는 작업 필요
  res.status(302).redirect(`/diary/${diaryBook}/reading?page=${page}`);
});

router.get('/:id/reading', async (req, res) => {
  const diaryBook = parseInt(req.params.id);
  const page = (req.query.page) ? parseInt(qs.parse(req.query).page) : 1;

  const content = await diaryService.readingDiary(diaryBook, page);

  res.status(200).json({ page: page, content: content });
});

module.exports = router;