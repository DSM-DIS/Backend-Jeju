const axios = require('axios').default;
const { stringLen } = require('../configs');
const errors = require('../errors');
const { checkDiaryBookId, checkUser, httpErrorHandler } = require('../utils');

class DiaryService {
  async getDiary(userId, diaryBookId, page) {
    await checkDiaryBookId(diaryBookId);
    await checkUser(userId, diaryBookId);

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
    if (content.length > stringLen.content) {
      throw errors.BAD_REQUEST;
    }

    const res = await axios.post(`/repositories/diary`, {
      userId,
      diaryBookId,
      content
    });

    httpErrorHandler(res.status, res.cause);
  }
}

module.exports = DiaryService;