const Axios = require('axios').default;
const { baseURL } = require('../../configs');
const { NotFoundDiaryBook } = require('../../errors');

const axios = Axios.create({
  baseURL: baseURL.jeonju,
  timeout: 1000
});

const checkCreatedDiaryBook = async (diaryBookId) => {
  const res = await axios.get(`/diary-books/${diaryBookId}`);
  if (res.status === 404) {
    throw NotFoundDiaryBook;
  }
};

module.exports = checkCreatedDiaryBook;