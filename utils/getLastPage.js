// 해당 diaryBook에서 생성된 가장 마지막 page를 반환

module.exports = (diaryModel, diaryBook) => {
  return diaryModel.findOne({
    attributes: ['id'],
    where: { diary_book_id: diaryBook } ,
    order: [['id', 'DESC']]
  });
};