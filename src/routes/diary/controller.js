const DiaryService = require('../../services/diary');
const diaryService = new DiaryService();

const { BAD_REQUEST, NOT_FOUND_DIARY_BOOK } = require('../../errors');
const { isIntegerArg, isStringArg, isCreatedDiaryBook, isUserDiaryBook } = require('../../utils');

const getDiary = async (req, res) => {
  try {
    const userId =  req.headers.userId;
    const diaryBookId = parseInt(req.params.id);
    const page = parseInt(req.params.page);

    if (!isIntegerArg(diaryBookId) || !isIntegerArg(page)) {
      throw BAD_REQUEST;
    }

    const resData = await diaryService.getDiary(userId, diaryBookId, page);
    res.send(resData);
  } catch (error) {
    res.send({
      status: error.status ? error.status : 500,
      message: error.status ? error.message : 'Internal server error'
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

    if (!isIntegerArg(diaryBookId) || !isStringArg(content)) {
      throw BAD_REQUEST;
    }
    if (!await isCreatedDiaryBook(diaryBookId)) {
      throw NOT_FOUND_DIARY_BOOK;
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