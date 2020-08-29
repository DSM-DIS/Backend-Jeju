// const express = require('express');
// const qs = require('qs');

// const db = require('./models/MySQLconnection');
// db.connect();

// const diaryRouter = require('./routes/diaryRouter');

// const app = express();
// app.set('port', process.env.PORT || 4008);
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.use('/diary', diaryRouter);

// app.use((err, req, res, next) => {
//   //console.error(err);
//   res.status(err.status || 500);
//   res.send(err.status);
// });

// app.listen(app.get('port'), () => {
//   console.log(app.get('port'), '번 포트에서 대기 중');
// });

const express = require('express');
const app = express();

const initApp = require('./loaders');

initApp(app);

app.set('port', process.env.SERVER_PORT || 4008);
app.listen(app.get('port'), () => {
  console.log('listing at ', app.get('port'));
});