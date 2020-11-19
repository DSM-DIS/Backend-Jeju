function isStringArg(string) {
  const isWhiteSpace = /^\s*$/;

  return typeof (string) && !isWhiteSpace.test(string);
}

module.exports = isStringArg;