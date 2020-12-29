const Axios = require('axios').default;
const { baseURL } = require('../../configs');
const { ForbiddenDiaryBook } = require('../../errors');
const checkDiaryBook = require('./checkDiaryBook');

const axios = Axios.create({
  baseURL: baseURL.jeonju,
  timeout: 1000
});

const checkOwner = async (userId, diaryBookId) => {
  // diaryBookId error handler
  await checkDiaryBook(diaryBookId);

  const res = await axios.get(`/diay-books/${diaryBookId}`);
  if (res.owner !== res.userId) {
    throw ForbiddenDiaryBook;
  }
};

module.exports = checkOwner;