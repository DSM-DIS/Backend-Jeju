class HttpError extends Error {
  constructor(status, message, cause) {
    super(message);
    this.status = status;
    this.cause;
  }
}

const badRequest = new HttpError(400, '잘못된 방식의 요청입니다.');
const notFoundDiary = new HttpError(404, '해당 일기를 찾을 수 없습니다.', 'diary');
const notFoundPage = new HttpError(404, '해당 page를 찾을 수 없습니다.', 'page');
const internalServer = new HttpError(500, '내부적으로 오류가 있습니다. 빠른 수정 바랍니다.');

module.exports = {
  badRequest,
  notFoundDiary,
  notFoundPage,
  internalServer
};