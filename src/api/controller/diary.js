const DiaryService = require('../../services/diary');
const checkIntegerArg = require('../../utils/checkParam/checkIntegerArg');
const { checkDiaryBook, checkOwner, checkContent } = require('../../utils');

const diaryService = new DiaryService();

const getDiary = async (req, res, next) => {
  try {
    const userId = req.headers.userid;
    const diaryBookId = parseInt(req.params.id);
    const page = parseInt(req.params.page);

    checkIntegerArg(page);
    await checkDiaryBook(userId, diaryBookId);

    const resData = await diaryService.getDiary(userId, diaryBookId, page);
    res.send(resData);
  } catch (error) {
    console.log('getDiary controller error');
    console.error(error);
    next(error);
  }
};

const writingDiary = async (req, res, next) => {
  try {
    const userId = req.headers.userid;
    const diaryBookId = parseInt(req.params.id);
    const { content } = req.body;

    await checkOwner(userId, diaryBookId);
    checkContent(content);

    await diaryService.writingDiary(userId, diaryBookId, content);
    res.status(201).send();
  } catch (error) {
    console.log('writingDiary controller error');
    console.error(error);
    next(error);
  }
};

module.exports = {
  getDiary,
  writingDiary
};