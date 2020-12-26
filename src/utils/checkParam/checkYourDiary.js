const axios = require('axios').default;
const { ForbiddenDiaryBook } = require('../errors');
const { checkDiaryBook } = require('../');

const checkYourDiary = async (userId, diaryBookId) => {
  checkDiaryBook(diaryBookId);

  const res = await axios.get('/repositories/diary-book', {
    headers: {
      id: userId
    }
  });

  for (const diaryBook of res.diaryBooks) {
    if (diaryBook.id === diaryBookId) {
      return;
    }
  }
  throw ForbiddenDiaryBook;
};

module.exports = checkYourDiary;