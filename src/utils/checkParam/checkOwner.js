const axios = require('axios').default;
const { ForbiddenDiaryBook } = require('../../errors');
const checkDiaryBook = require('./checkDiaryBook');

const checkOwner = async (userId, diaryBookId) => {
  // diaryBookId error handler
  await checkDiaryBook(diaryBookId);

  const res = await axios.get(`/repositories/diay-books/${diaryBookId}`);
  if (res.owner !== res.userId) {
    throw ForbiddenDiaryBook;
  }
};

module.exports = checkOwner;