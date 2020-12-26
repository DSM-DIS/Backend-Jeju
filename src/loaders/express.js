import * as express from "express";
import cors from "cors";
import router from "../routes";
import { NotFoundApi } from "../errors";

export default (app) => {
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