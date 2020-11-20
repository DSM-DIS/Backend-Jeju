const axios = require('axios').default;
const { AUTHOR_LEN } = require('../configs/attribute');
const { isIntegerArg, isStringArg, isCreatedDiaryBook, isUserDiaryBook } = require('../utils');
const { BAD_REQUEST, NOT_FOUND_DIARY_BOOK, NOT_FOUND_PAGE } = require('../errors');

class DiaryService {
  async getDiary(userId, diaryBookId, page) {
    if (!await isCreatedDiaryBook(diaryBookId)) {
      throw NOT_FOUND_DIARY_BOOK;
    }
    if (!await isUserDiaryBook(userId, diaryBookId)) {
      throw FORBIDDEN;
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

  async writingDiary(userId, diaryBookId, content) {
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