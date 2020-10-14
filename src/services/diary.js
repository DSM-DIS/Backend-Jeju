const { badRequest, notFoundPage } = require('../errors');
const { getLastPage, getLastId } = require('../utils');

class DiaryService {
  constructor(diaryModel) {
    this.diaryModel = diaryModel;
  }

  // 일기장 소유자가 일기를 작성할 수 있는 페이지를 생성
  async writingDiary(diaryBook, author) {
    // Bad Request Error Handler
    if (typeof diaryBook !== 'number' || diaryBook < 1) {
      throw badRequest;
    }
    if (typeof author !== 'string' || !author) {
      throw badRequest;
    }

    // 단순히 글을 저장할 page만 생성함
    await this.diaryModel.createPage(diaryBook, author);
  }

  // 일기 작성 완료 후 다음 사람에게 일기를 건네줌(교환함)
  async handingDiary(diaryBook, content) {
    try {
      const id = getLastId(this.diaryModel, diaryBook);

      // id: PRIMARY KEY이지만, 그럼에도 검사를 진행
      await this.diaryModel.writingDiary(id, content);

      // 일기를 넘겨주면 자신이 작성한 일기 page로 redirect하기 위해 page값이 필요
      return getLastPage(this.diaryModel, diaryBook);
    } catch (error) {
      throw error;
    }
  }

  // 작성된 일기 내용을 본다.
  async readingDiary(diaryBook, page) {
    // Bad Request Error handler
    if (!diaryBook || !page || page < 1) {
      throw badRequest;
    }

    // Not Found Error handler
    const lastPage = getLastPage(this.diaryModel, diaryBook);
    if (page > lastPage) {
      throw notFoundPage;
    }
    
    // return content from page that requested in diaryBook that requested.
    return await this.diaryModel.getContent(diaryBook, page);
  }
}

module.exports = DiaryService;