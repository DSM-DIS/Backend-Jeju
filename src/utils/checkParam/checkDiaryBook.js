const axios = require('axios').default;
const { checkIntegerArg, httpErrorHandler } = require('../');

const checkDiaryBook = async (diaryBookId) => {
  // check paramater type
  checkIntegerArg(diaryBookId);

  // check diary book is created
  const res = await axios.get(`/repositories/diay-books/${diaryBookId}`);
  httpErrorHandler(res.status, res.cause);
};

module.exports = checkDiaryBook;