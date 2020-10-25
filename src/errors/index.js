class HttpError extends Error {
  constructor(status, message) {
    super(message);
    this.status = status;
  }
}

const BAD_REQUEST = new HttpError(400, 'Invalid parameters supplied');
const INVALID_TOKEN = new HttpError(403, 'Invalid Token');
const FORBIDDEN = new HttpError(403, 'Forbidden user access');
const NOT_FOUND = new HttpError(404, 'Not found');

module.exports = {
  BAD_REQUEST,
  INVALID_TOKEN,
  FORBIDDEN,
  NOT_FOUND
};