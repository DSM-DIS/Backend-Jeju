// error 처리를 어떻게 해야 하는지 물어볼 필요가 있음

const { getLastPage } = require('../utils');
const { badRequest, notFoundDiary, notFoundPage } = require('../errors');

class DiaryService {
  constructor(diaryModel) {
    this.diaryModel = diaryModel;
  }

  // 일기장 소유자가 일기를 작성할 수 있는 페이지를 생성
  async writingDiary(diaryBook, author) {
    let result = undefined;
    try {
      result = await this.diaryModel.create({
        diary_book_id: diaryBook,
        author: author
      });
      
      return result.id; // 작성한 일기의 id 반환
    } catch (error) {
      throw error;
    }
  }

  // 일기 작성 완료 후 다음 사람에게 일기를 건네줌(교환함)
  async handingDiary(diaryBook, id, content) {
    try {
      // id: PRIMARY KEY이지만, 그럼에도 검사를 진행
      await this.diaryModel.update({ content: content }, {
        where: { id: id, diary_book_id: diaryBook }
      });

      // 일기를 넘겨주면 자신이 작성한 일기 page로 redirect하기 위해 page값이 필요
      return getLastPage(this.diaryModel, diaryBook);
    } catch (error) {
      throw error;
    }
  }

  // 작성된 일기 내용을 본다.
  async readingDiary(diaryBook, page = 1) {
    if (!diaryBook) {
      throw badRequest;
    }
    try {
      return await this.diaryModel.findAll({
        attributes: ['content'],
        where: { diary_book_id: diaryBook },
        offset: page - 1,
        limit: 1
      });
    } catch (error) {
      throw error;
    }
  }
}

module.exports = DiaryService;