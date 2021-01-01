const logger = require('../loaders/logger');

const logRequest = (req, res, next) => {
  logger.info(
    `${req.method} ${req.originalUrl}\n\
      userid: ${req.headers.userid}\n\
      body: ${req.body}`);
  next();
};

module.exports = logRequest;