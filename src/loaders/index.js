const { connectDatabase } = require('./database');
const loadExpressApp = require('./express');

const initApp = async (app) => {
  await connectDatabase();
  loadExpressApp(app);
};

module.exports = initApp;