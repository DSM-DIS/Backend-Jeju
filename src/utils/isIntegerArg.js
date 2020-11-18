function isIntegerArg(num) {
  const isFloatExp = /[*.*]/;

  return !isNaN(num) && !isFloatExp.test(num) && num >= 1;
}

module.exports = isIntegerArg;