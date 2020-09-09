// 해당 diaryBook에서 가장 마지막으로 생성된 튜플의 id를 반환

module.exports = async (diaryModel, diaryBook) => {
  return await diaryModel.findOne({
    attributes: ['id'],
    where: { diary_book_id: diaryBook } ,
    order: [['id', 'DESC']]
  });
};