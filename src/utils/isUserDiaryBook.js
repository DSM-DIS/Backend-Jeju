const axios = require('axios').default;

const isUserDiaryBook = async (userId, diaryBookId) => {
  const res = await axios.get('/repositories/diary-book', {
    headers: {
      id: userId
    }
  });

  for (const diaryBook of res.diaryBooks) {
    if (diaryBook.id === diaryBookId) {
      return true;
    }
  }
  return false;
};

module.exports = isUserDiaryBook;