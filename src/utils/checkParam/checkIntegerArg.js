const { BadRequest } = require('../../errors');

const checkIntegerArg = (num) => {
  const isFloatExp = /[*.*]/;

  if (isNaN(num) && isFloatExp.test(num) && num < 1) {
    throw BadRequest;
  }
  return true;
}

module.exports = checkIntegerArg;