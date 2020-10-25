const { Diary } = require('../../repositories');
const DiaryService = require('../../services/diary');
const diaryService = new DiaryService(Diary);

const { BAD_REQUEST, FORBIDDEN } = require('../../errors');
const { isAlrightId, isCreatedDiaryBook } = require('../../utils');

const getDiary = async (req, res) => {
  try {
    const userId =  req.headers.Authorization;
    const diaryBookId = parseInt(req.params.id);
    const page = parseInt(req.params.page);

    if (!isAlrightId(userId) || isNaN(diaryBookId) || isNaN(page)) {
      throw BAD_REQUEST;
    }
    if (!await isCreatedDiaryBook(userId, diaryBookId)) {
      throw FORBIDDEN;
    }

    const resData = await diaryService.getDiary(diaryBookId, page);
    res.send(resData);
  } catch (error) {
    res.status(error.status).send({
      message: error
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