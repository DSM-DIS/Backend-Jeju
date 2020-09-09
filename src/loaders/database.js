const { Sequelize } = require('sequelize');
const { DB_HOST, DB_DBNAME, DB_USER, DB_PASSWORD } = require('../configs');

// connecting to a database
const sequelize = new Sequelize(DB_DBNAME, DB_USER, DB_PASSWORD, {
  define: {
    // 모든 테이블 이름을 복수형이 아닌 model을 설정할 때 설정한 이름으로 사용할 수 있다.
    freezeTableName: true,
    // createdAt, updateAt이 자동으로 생성되는 것을 막을 수 있다.
    timestamps: false
  },
  host: DB_HOST,
  dialect: 'mysql'
});

// test the connection
async function connectDatabase() {
  try{
    await sequelize.authenticate();
    console.log('success to connect the database.');
  } catch (error) {
    throw error;
  }
}

module.exports = {
  sequelize,
  connectDatabase
};
