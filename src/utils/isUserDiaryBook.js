const axios = require('axios').default;
const { FORBIDDEN } = require('../errors');

const isCreatedDiaryBook = async (userId, diaryBookId) => {
  const res = await axios.get('/user/diary-books', {
    headers: {
      Authorization: userId
    }
  });
  if (res.status === 403) {
    throw FORBIDDEN;
  }

  for (const diaryBook of res.diaryBooks) {
    if (diaryBook.id === diaryBookId) {
      return true;
    }
  }
  return false;
};

module.exports = isCreatedDiaryBook;