const checkUser = require('./checkUser');
const checkDiaryBookId = require('./checkDiaryBookId');
const isIntegerArg = require('./isIntegerArg');
const isStringArg = require('./isStringArg');
const isOwner = require('./isOwner');
const httpErrorHandler = require('./httpErrorHandler');

module.exports = {
  checkUser,
  checkDiaryBookId,
  isIntegerArg,
  isStringArg,
  isOwner,
  httpErrorHandler
};