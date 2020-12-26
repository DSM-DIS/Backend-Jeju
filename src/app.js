const express = require('express');
const initApp = require('./loaders');
const { port } = require('./configs');

const app = express();
initApp(app);

app.listen(port, () => {
  console.log(`Server listing at ${port}`);
});