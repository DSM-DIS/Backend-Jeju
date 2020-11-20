const axios = require('axios').default;
const { BAD_REQUEST, NOT_FOUND_DIARY_BOOK } = require('../errors');

const isOwner = async (userId, diaryBookId) => {
  const res = await axios.get(`/repositories/diay-books/${diaryBookId}`);

  if (res.status === 400) {
    throw BAD_REQUEST;
  } else if (res.status === 404) {
    throw NOT_FOUND_DIARY_BOOK;
  }

  return userId === res.owner;
};

module.exports = isOwner;