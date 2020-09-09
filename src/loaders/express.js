const express = require('express');
const cors = require('cors');

const apis = require('../apis');

module.exports = (app) => {
  app.use(cors); // CORS 허용
  app.use(express.json());
  // 내부적으로 qs module을 사용하도록 설정
  app.use(express.urlencoded({ extended: true }));

  app.use(apis);
};