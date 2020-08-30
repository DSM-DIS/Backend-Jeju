// async-mutex module에 대해 조금 더 알아볼 필요가 있음
// error 처리를 어떻게 해야 하는지 물어볼 필요가 있음

const Mutex = require('async-mutex').Mutex;
const { getLastId, getLastPage } = require('../utils');

class DiaryService {
  constructor(diaryModel) {
    this.diaryModel = diaryModel;
    // 여러 프로세스의 동기화 작업을 위한 mutex 선언
    this.mutex = new Mutex();
    // writing page가 생성되었는지를 저장
    this.createdWritingPage = false;
  }

  // 일기장 소유자가 일기를 작성할 수 있는 페이지를 생성
  async writingDiary(diaryBook, author) {
    // writing page가 생성되지 않았을 때에만 생성한다.
    if (!this.createdWritingPage) {
      let result = undefined;
      const release = await this.mutex.acquire();
      try {
        result = await this.diaryModel.create({
          diary_book_id: diaryBook,
          author: author
        });
        this.createdWritingPage = true;
      } finally {
        release();
        return result.id;  // 작성한 일기의 id 반환
      }
    } else {
      // writing page가 이미 생성되어 있다면 생성되어 있는 page를 반환
      return getLastId(this.diaryModel, diaryBook);
    }
  }

  // 일기 작성 완료 후 다음 사람에게 일기를 건네줌(교환함)
  async handingDiary(diaryBook, id, content) {
    const release = await this.mutex.acquire();
    try {
      // id: PRIMARY KEY => diary_book_id 검사를 하지 않음
      this.diaryModel.update({ content: content }, {
        where: { id: id }
      });
    } finally {
      release();
      // 일기를 넘겨주면 자신이 작성한 일기 page로 redirect하기 위해 page값이 필요
      return getLastPage(this.diaryModel, diaryBook);
    }
  }

  // 작성된 일기 내용을 본다.
  readingDiary(diaryBook, page = 1) {
    return this.diaryModel.findAll({
      attributes: ['content'],
      where: { diary_book_id: diaryBook },
      offset: page - 1,
      limit: 1
    });
  }
}

module.exports = DiaryService;