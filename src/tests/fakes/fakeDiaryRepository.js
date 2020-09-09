const { badRequest, notFoundDiary, notFoundPage } = require('../../errors');

class FakeDiaryRepository {
  static async readingDiary(diaryBook, page = 1) {
    if (!diaryBook) {
      throw badRequest;
    }
    if (diaryBook !== 1) {
      throw notFoundDiary;
    }
    if (page !== 1) {
      throw notFoundPage;
    }
    if (diaryBook === 1 && page === 1) {
      return {
        page: 1,
        content: 'test1'
      };
    }
  }
}

module.exports = FakeDiaryRepository;