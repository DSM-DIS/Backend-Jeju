const { badRequest, notFoundDiary } = require('../../errors');
const { Diary } = require('../../module');
const { getLastPage } = require('../../utils');

class FakeDiaryPages {
  static async getLastPage(diaryBook) {
    try {
      if (!diaryBook) {
        throw badRequest;
      }

      const lastPage = await getLastPage(Diary, diaryBook);
      return lastPage;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = FakeDiaryPages;