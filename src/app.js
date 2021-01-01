const express = require('express');
const initApp = require('./loaders');
const { port } = require('./configs');
const logger = require('./loaders/logger');

const app = express();
initApp(app);

app.listen(port, () => {
  logger.info(`Server listening on ${port}`);
});