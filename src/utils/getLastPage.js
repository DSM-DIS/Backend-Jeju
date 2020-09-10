// 해당 diaryBook에서 작성한 일기의 마지막 page 값을 반환한다.
// 해당 diaryBook에 작성되어 있는 일기의 총 개수이기도 하다.

const { badRequest, notFoundDiary, internalServer } = require('../errors');

module.exports = async (diaryModel, diaryBook) => {
  if (!diaryModel || !diaryBook) {
    throw badRequest;
  }
  
  try {
    const lastPage = await diaryModel.count({
      where: { diary_book_id: diaryBook }
    });

    // database에 해당 diaryBook이 존재하지 않으면 0을 반환
    if (!lastPage) {
      throw notFoundDiary;
    }
    return lastPage;
  } catch (error) {
    throw internalServer;
  }
};