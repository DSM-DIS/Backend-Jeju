const axios = require('axios').default;

const isUserDiaryBook = async (userId, diaryBookId) => {
  const res = await axios.get('/user/diary-books', {
    headers: {
      Authorization: userId
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