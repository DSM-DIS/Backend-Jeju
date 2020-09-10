const express = require('express');
const app = express();

const initApp = require('./src/loaders');

initApp(app);

app.set('port', process.env.SERVER_PORT || 4008);
app.listen(app.get('port'), () => {
  console.log('listing at ', app.get('port'));
});
