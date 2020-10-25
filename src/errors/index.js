class HttpError extends Error {
  constructor(status, message) {
    super(message);
    this.status = status;
  }
}

const BAD_REQUEST = new HttpError(400, 'Invalid parameters supplied');
const NOT_FOUND = new HttpError(404, 'Not found');

module.exports = {
  BAD_REQUEST,
  NOT_FOUND
};