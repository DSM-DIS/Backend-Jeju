const axios = require('axios').default;
const { INVALID_TOKEN } = require('../errors');

const isCreatedDiaryBook = async (userId, diaryBookId) => {
  const res = await axios.get('/user/diary-books', {
    headers: {
      Authorization: userId
    }
  });
  if (res.status === 403) {
    throw INVALID_TOKEN;
  }

  for (const diaryBook of res.diaryBooks) {
    if (diaryBook.id === diaryBookId) {
      return true;
    }
  }
  return false;
};

module.exports = isCreatedDiaryBook;