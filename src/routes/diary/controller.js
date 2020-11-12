const { Diary } = require('../../repositories');
const DiaryService = require('../../services/diary');
const diaryService = new DiaryService(Diary);

const { BAD_REQUEST, FORBIDDEN } = require('../../errors');
const { isIntegerArg, isUserDiaryBook } = require('../../utils');

const getDiary = async (req, res) => {
  try {
    const userId =  req.headers.userId;
    const diaryBookId = parseInt(req.params.id);
    const page = parseInt(req.params.page);

    if (!isIntegerArg(diaryBookId) || !isIntegerArg(page)) {
      throw BAD_REQUEST;
    }
    if (!await isUserDiaryBook(userId, diaryBookId)) {
      throw FORBIDDEN;
    }

    const resData = await diaryService.getDiary(diaryBookId, page);
    res.send(resData);
  } catch (error) {
    res.send({
      status: error.status ? error.status : 500,
      message: error.message
    });
  }
};

const writingDiary = async (req, res) => {
  try {
    if (!Object.keys(req.body).length) {
      throw BAD_REQUEST;
    }

    const userId = req.headers.Authorization;
    const diaryBookId = parseInt(req.params.id);
    const { content } = req.body;

    if (!isAlrightId(userId) || isNaN(diaryBookId)) {
      throw BAD_REQUEST;
    }

    await diaryService.writingDiary(userId, diaryBookId, content);
    res.status(201).send();
  } catch (error) {
    res.status(error.status).send({
      message: error.message
    });
  }
};

module.exports = {
  getDiary,
  writingDiary
};