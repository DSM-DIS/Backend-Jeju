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

  if (!lastPage) {
   throw notFoundDiary; 
  }
  return lastPage;
};