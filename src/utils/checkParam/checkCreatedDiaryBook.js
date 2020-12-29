const axios = require('axios').default;
const { NotFoundDiaryBook } = require('../../errors');

const checkCreatedDiaryBook = async (diaryBookId) => {
  const res = await axios.get(`repositories/diary-books/${diaryBookId}`);
  if (res.status === 404) {
    throw NotFoundDiaryBook;
  }
};

module.exports = checkCreatedDiaryBook;