const axios = require('axios').default;
const { BadRequest, NotFoundDiaryBook} = require('../errors');

const isOwner = async (userId, diaryBookId) => {
  const res = await axios.get(`/repositories/diay-books/${diaryBookId}`);

  if (res.status === 400) {
    throw BadRequest;
  } else if (res.status === 404) {
    throw NotFoundDiaryBook;
  }

  return userId === res.owner;
};

module.exports = isOwner;