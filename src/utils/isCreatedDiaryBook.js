const axios = require('axios').default;

const isCreatedDiaryBook = async (diaryBookId) => {
  const res = await axios.get(`/repositories/diay-books/${diaryBookId}`);

  if (res.status === 404) {
    return false;
  }
  return true;
};

module.exports = isCreatedDiaryBook;