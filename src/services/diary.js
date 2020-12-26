const axios = require('axios').default;
const { stringLen } = require('../configs');
const errors = require('../errors');
const { httpErrorHandler } = require('../utils');

class DiaryService {
  async getDiary(userId, diaryBookId, page) {
    const res = await axios.get(`/repositories/diary-book/${diaryBookId}?page=${page}`, {
      headers: {
        userId: userId
      }
    });
    httpErrorHandler(res.status, res.cause);
    
    return {
      page: res.page,
      content: res.content
    };
  }

  async writingDiary(userId, diaryBookId, content) {
    const res = await axios.post(`/repositories/diary`, {
      userId,
      diaryBookId,
      content
    });

    httpErrorHandler(res.status, res.cause);
  }
}

module.exports = DiaryService;