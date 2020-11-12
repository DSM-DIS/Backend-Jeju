function isIntegerArg(num) {
  const isFloatExp = /[*.*]/;

  return !isFloatExp.test(num) || isNaN(num);
}

module.exports = isIntegerArg;