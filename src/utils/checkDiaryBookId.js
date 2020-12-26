const axios = require('axios').default;
const { BadRequest, NotFoundDiaryBook } = require('../errors');

const isCreatedDiaryBook = async (diaryBookId) => {
  const res = await axios.get(`/repositories/diay-books/${diaryBookId}`);

  if (res.status === 404) {
    throw NotFoundDiaryBook;
  } else if (res.status === 400) {
    throw BadRequest;
  }
  
  return true;
};

module.exports = isCreatedDiaryBook;