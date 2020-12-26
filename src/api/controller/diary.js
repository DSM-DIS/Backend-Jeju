const { BadRequest } = require('../../errors');
const DiaryService = require('../../services/diary');
const { checkYourDiary, checkOwner, checkContent } = require('../../utils');

const diaryService = new DiaryService();

const getDiary = async (req, res, next) => {
  try {
    const userId = req.headers.userId;
    const diaryBookId = parseInt(req.params.id);
    const page = parseInt(req.params.page);

    checkYourDiary(userId, diaryBookId);

    const resData = await diaryService.getDiary(userId, diaryBookId);
    res.send(resData);
  } catch (error) {
    next(error);
  }
};

const writingDiary = async (req, res, next) => {
  try {
    if (!Object.keys(req.body).length) {
      throw BadRequest;
    }

    const userId = req.headers.userId;
    const diaryBookId = parseint(req.params.id);
    const { content } = req.body;

    checkOwner(userId, diaryBookId);
    checkContent(content);

    await diaryService.writingDiary(userId, diaryBookId, content);
    res.status(201).send();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getDiary,
  writingDiary
};