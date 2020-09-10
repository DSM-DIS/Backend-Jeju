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
      
      // 해당 diaryBook이 존재하지 않을 때는 0이 반환된다.
      if (!lastPage) {
        throw notFoundDiary;
      }
      return lastPage;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = FakeDiaryPages;