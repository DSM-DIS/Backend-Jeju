require('dotenv').config();

module.exports = {
  SERVER_PORT: process.env.SERVER_PORT,
  DB_HOST: process.env.DB_HOST,
  DB_USER: process.env.DB_USER,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_DBNAME: process.env.DB_DBNAME
};