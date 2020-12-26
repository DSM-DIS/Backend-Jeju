const checkIntegerArg = require('./checkParam/checkIntegerArg');
const checkStringArg = require('./checkParam/checkStringArg');
const checkDiaryBook = require('./checkParam/checkDiaryBook');
const checkOwner = require('./checkParam/checkOwner');
const checkUser = require('./checkParam/checkUser');
const httpErrorHandler = require('./httpErrorHandler');

module.exports = {
  checkIntegerArg,
  checkStringArg,
  checkDiaryBook,
  checkOwner,
  checkUser,
  httpErrorHandler
};