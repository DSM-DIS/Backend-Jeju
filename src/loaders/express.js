const express = require('express');
const cors = require('cors');
const router = require('../api/routes');
const { NotFoundApi, InternalServer } = require('../errors');
const logger = require('./logger');

const loadExpressApp = (app) => {
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  app.use('/', router);
  app.use((req, res, next) => {
    next(NotFoundApi);
  });
  app.use((err, req, res, next) => {
    logger.error(
      `message: ${err.message}, status: ${err.status}, cause: ${err.cause}`
    );
    res.staus(err.status || 500);
    res.json({
      message: err.message,
      cause: err.cause
    });
  });
};

module.exports = loadExpressApp;