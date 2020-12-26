import { Sequelize } from "sequelize";
import * as config from "../configs";

// connecting to a database
export const sequelize = new Sequelize(
  config.mysql.name,
  config.mysql.username,
  config.mysql.password,
  {
    host: config.mysql.host,
    dialect: 'mysql',
    define: {
      // 모든 테이블 이름을 복수형이 아닌 model을 설정할 때 설정한 이름으로 사용할 수 있다.
      freezeTableName: true,
      // createdAt, updateAt이 자동으로 생성되는 것을 막을 수 있다.
      timestamps: false
    }
  }
);

// test the connection
export default async () => {
  try{
    await sequelize.authenticate();
  } catch (error) {
    console.log(`mysql connection error: ${error.message}`);
    process.exit(1);
  }
};
