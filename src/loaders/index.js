const { connectDatabase } = require('./database');
const loadExpressApp = require('./express');

module.exports = async (app) => {
  await connectDatabase();
  loadExpressApp(app);
};