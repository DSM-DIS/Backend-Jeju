const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../../loaders/database');

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
    type: DataTypes.STRING(12),
    allowNull: false
  },
  content: DataTypes.STRING(240)
}, {
  sequelize,
  tableName: 'diary'
});

module.exports = Diary;