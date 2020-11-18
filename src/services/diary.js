const axios = require('axios').default;
const { AUTHOR_LEN } = require('../configs/attribute');
const { isIntegerArg, isStringArg } = require('../utils');
const { BAD_REQUEST, NOT_FOUND_DIARY_BOOK, NOT_FOUND_PAGE } = require('../errors');

class DiaryService {
  getDiary = async (diaryBookId, page) => {
    if (!isIntegerArg(diaryBookId) || !isIntegerArg(page)) {
      throw BAD_REQUEST;
    }

    const res = await axios.get(`/repositories/diary-book/${diaryBookId}?page=${page}`);

    if (res.status === 400) {
      throw BAD_REQUEST;
    } else if (res.status === 404) {
      if (res.cause === 'diary book') {
        throw NOT_FOUND_DIARY_BOOK;
      } else if (res.cause === 'page') {
        throw NOT_FOUND_PAGE;
      }
    }
    
    return {
      page: res.page,
      content: res.content
    };
  }

  writingDiary = async (userId, diaryBookId, content) => {
    if (!isIntegerArg(diaryBookId) || !isStringArg(content) || content.length > AUTHOR_LEN) {
      throw BAD_REQUEST;
    }

    const res = await axios.post(`/repositories/diary`, {
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