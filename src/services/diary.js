const Axios = require('axios').default;
const { baseURL } = require('../configs');
const { httpErrorHandler } = require('../utils');

const axios = Axios.create({
  baseURL: baseURL.dokdo,
  timeout: 1000
});

class DiaryService {
  async getDiary(userId, diaryBookId, page) {
    const res = await axios.get(`/diary-book/${diaryBookId}/page/${page}`, {
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
    const res = await axios.post(`/diary`, {
      userId,
      diaryBookId,
      content
    });

    httpErrorHandler(res.status, res.cause);
  }
}

module.exports = DiaryService;