// 해당 diaryBook에서 작성한 일기의 마지막 page 값을 반환한다.
// 해당 diaryBook에 작성되어 있는 일기의 총 개수이기도 하다.

module.exports = async (diaryModel, diaryBook) => {
  try {
    const lastPage = await diaryModel.count({
      where: { diary_book_id: diaryBook }
    });
    return lastPage;
  } catch (error) {
    console.error(error);
    throw error;
  }
};