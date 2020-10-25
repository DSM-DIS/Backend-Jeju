const isAlrightId = (userId) => {
  const checkRegExp = /[A-Z|a-z|0-9]/g;
  const ID_MIN_LEN = 6;
  const ID_MAX_LEN = 12;

  if (typeof userId !== 'string' || !userId) {
    return false;
  }
  if (userId.length < ID_MIN_LEN || userId.length > ID_MAX_LEN) {
    return false;
  }
  if (!checkRegExp.test(userId)) {
    return false;
  }
  return true;
}

module.exports = isAlrightId;