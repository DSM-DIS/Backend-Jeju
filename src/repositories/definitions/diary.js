const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../../loaders');

class Diary extends Model {}

Diary.init({
  id: {
    type: DataTypes.INTEGER(11),
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  diary_book_id: {
    type: DataTypes.INTEGER(11),
    allowNull: false
  },
  author: {
    type: DataTypes.STRING(AUTHOR_LEN),
    allowNull: false
  },
  content: {
    type: DataTypes.STRING(CONTENT_LEN),
    allowNull: false
  },
  page: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  sequelize,
  tableName: 'diary'
});

module.exports = Diary;