const error = require('../errors');

const httpErrorHandler = (status, cause) => {
  if (status === 400) {
    throw error.BadRequest;
  }

  if (status === 403) {
    if (cause === 'diary book') {
      throw error.ForbiddenDiaryBook;
    } else if (cause === 'page') {
      throw error.ForbiddenPage;
    }
  }

  if (status === 404) {
    if (cause === 'diary book') {
      throw error.NotFoundDiaryBook;
    } else if (cause === 'page') {
      throw error.NotFoundPage;
    } else {
      throw error.NotFoundApi;
    }
  }
  
  if (status === 500) {
    throw error.InternalServer;
  }
};

module.exports = httpErrorHandler;