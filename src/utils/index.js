const checkIntegerArg = require('./checkParam/checkIntegerArg');
const checkStringArg = require('./checkParam/checkStringArg');
const checkDiaryBook = require('./checkParam/checkDiaryBook');  // 해당 diaryBookId가 만들어졌는지 확인한다.
const checkOwner = require('./checkParam/checkOwner');          // 자신이 해당 diaryBook의 owner인지 확인한다.
const checkUser = require('./checkParam/checkUser');            // 자신이 해당 diaryBook에 소속되어 있는지 확인한다.
const httpErrorHandler = require('./httpErrorHandler');

module.exports = {
  checkIntegerArg,
  checkStringArg,
  checkDiaryBook,
  checkOwner,
  checkUser,
  httpErrorHandler
};