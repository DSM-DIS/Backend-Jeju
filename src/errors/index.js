const HttpError = require('./httpError');

const BadRequest = new HttpError(400, "Bad Request");
const ForbiddenDiaryBook = new HttpError(403, "Forbidden", "diary book");
const ForbiddenPage = new HttpError(403, "Forbidden", "page");
const NotFoundApi = new HttpError(404, "Not Found");
const NotFoundDiaryBook = new HttpError(404, "Not Found", "diary book");
const NotFoundPage = new HttpError(404, "Not Found", "page");
const InternalServer = new HttpError(500, 'Internal Server');

module.exports = {
  BadRequest,
  ForbiddenDiaryBook,
  ForbiddenPage,
  NotFoundApi,
  NotFoundDiaryBook,
  NotFoundPage,
  InternalServer
};