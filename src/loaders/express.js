const express = require('express');
const cors = require('cors');
const router = require('../api/routes');
const { NotFoundApi } = require('../errors');

const loadExpressApp = (app) => {
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  app.use('/', router);
  app.use((req, res, next) => {
    next(NotFoundApi);
  });
  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
      message: err.message
    });
  });
};

module.exports = loadExpressApp;