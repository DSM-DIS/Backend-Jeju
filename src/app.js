const express = require('express');
const app = express();
const { SERVER_PORT } = require('./configs');

const initApp = require('./loaders');

initApp(app);

app.listen(SERVER_PORT, () => {
  console.log('listing at ', app.get('port'));
});