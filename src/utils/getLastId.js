// 해당 diaryBook에서 가장 마지막으로 생성된 튜플의 id를 반환

const { notFoundDiary } = require('../errors');

module.exports = async (diaryModel, diaryBook) => {
  const lastId =  await diaryModel.max('id', {
    where: { diary_book_id: diaryBook }
  });
  if (isNaN(lastId)) {
    throw notFoundDiary;
  }
  return lastId;
};