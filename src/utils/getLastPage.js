// 해당 diaryBook에서 작성한 일기의 마지막 page 값을 반환한다.
// 해당 diaryBook에 작성되어 있는 일기의 총 개수이기도 하다.

const { badRequest, notFoundDiary } = require('../errors');

module.exports = async (diaryModel, diaryBook) => {
  if (!diaryModel || !diaryBook) {
    throw badRequest;
  }

  const lastPage = await diaryModel.count({
    where: { diary_book_id: diaryBook }
  });

  // count 값이 0이라는 것은 해당 일기장이 생성되지 않았다는 것을 의미
  if (!lastPage) {
   throw notFoundDiary; 
  }
  return lastPage;
};