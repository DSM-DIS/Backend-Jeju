const { config } = require('dotenv');

config();

module.exports = {
  port: parseInt(process.env.SERVER_PORT),
  mysql: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    name: process.env.DB_NAME
  },
  stringLen: {
    author: 12,
    content: 240
  },
  baseURL: {
    dokdo: process.env.DOKDO_URL,
    jeonju: process.env.JEONJU_URL,
    gyeongsang: process.env.GYEONGSANG_URL
  }
};