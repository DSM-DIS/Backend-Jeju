const express = require('express');
const cors = require('cors');
const router = require('../api/routes');
const { NotFoundApi, InternalServer } = require('../errors');

const loadExpressApp = (app) => {
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  app.use('/', router);
  app.use((req, res, next) => {
    next(NotFoundApi);
  });
  app.use((err, req, res, next) => {
    if (err.status && err.status !== 500) {
      res.status(err.status);
      res.json({
        message: err.message
      });
    } else {
      console.error('Jeju Server error');
      console.error(err);
      res.status(500).json({
        message: InternalServer.message
      });
    }
  });
};

module.exports = loadExpressApp;