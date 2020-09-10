const { badRequest, notFoundPage } = require('../../errors');
const { getLastPage } = require('../../utils');
const { Diary } = require('../../module');

class FakeDiaryRepository {
  static async readingDiary(diaryBook, page) {
    if (!diaryBook || !page) {
      throw badRequest;
    }

    try {
      const lastPage = await getLastPage(Diary, diaryBook);

      if (page > lastPage) {
        throw notFoundPage;
      }

      return {
        page: page,
        content: 'test1'
      };
    } catch (error) {
      throw error;
    }
  }
}

module.exports = FakeDiaryRepository;