class HttpError extends Error {
  constructor(status, message, cause) {
    super(message);
    this.status = status;
    this.cause = cause;
  }
}

const BAD_REQUEST = new HttpError(400, 'Invalid parameters supplied');
const FORBIDDEN_DIARY_BOOK = new HttpError(403, 'Forbidden user access', 'diary book');
const FORBIDDEN_PAGE = new HttpError(403, 'Forbidden user access', 'page');
const NOT_FOUND_DIARY_BOOK = new HttpError(404, 'Not found', 'diary book');
const NOT_FOUND_PAGE = new HttpError(404, 'Not found', 'page');

module.exports = {
  BAD_REQUEST,
  FORBIDDEN_DIARY_BOOK,
  FORBIDDEN_PAGE,
  NOT_FOUND_DIARY_BOOK,
  NOT_FOUND_PAGE
};