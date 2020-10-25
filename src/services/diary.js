const axios = require('axios').default;
const { BAD_REQUEST, NOT_FOUND } = require('../errors');

class DiaryService {
  constructor(diaryModel) {
    this.diaryModel = diaryModel;
  }

  getDiary = async (diaryBookId, page) => {
    if (typeof diaryBookId !== 'number' || diaryBookId < 1) {
      throw BAD_REQUEST;
    }
    if (typeof page !== 'number' || page < 1) {
      throw BAD_REQUEST;
    }

    const res = await axios.get(`/repositories/diary-book/${diaryBookId}?page=${page}`);

    if (res.status === 400) {
      throw BAD_REQUEST;
    } else if (res.status === 404) {
      throw NOT_FOUND;
    }

    return {
      page: res.page,
      content: res.content
    };
  }

  writingDiary = async (userId, diaryBookId, content) => {
    const CONTENT_MAX_LEN = 240;

    if (typeof diaryBookId !== 'number' || diaryBookId < 1) {
      throw BAD_REQUEST;
    }
    if (typeof content !== 'string' || !content || content.length > CONTENT_MAX_LEN) {
      throw BAD_REQUEST;
    }

    const res = await axios.post('/repositories/diary', {
      userId,
      diaryBookId,
      content
    });

    if (res.status === 400) {
      throw BAD_REQUEST;
    }
  }
}

module.exports = DiaryService;