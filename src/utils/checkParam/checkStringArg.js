const { BadRequest } = require('../../errors');

const checkStringArg = (string) => {
  const isWhiteSpace = /^\s*$/;

  if (typeof (string) === 'string' && isWhiteSpace.test(string)) {
    throw BadRequest;
  }
  return true;
}

module.exports = checkStringArg;