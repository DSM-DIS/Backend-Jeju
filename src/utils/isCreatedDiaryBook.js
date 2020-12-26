const axios = require('axios').default;
const { BadRequest } = require('../errors');

const isCreatedDiaryBook = async (diaryBookId) => {
  const res = await axios.get(`/repositories/diay-books/${diaryBookId}`);

  if (res.status === 400) {
    throw BadRequest;
  } else if (res.status === 404) {
    return false;
  }
  return true;
};

module.exports = isCreatedDiaryBook;