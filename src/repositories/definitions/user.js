const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../../loaders');

class User extends Model {}

User.init({
  id: {
    type: DataTypes.STRING(12),
    allowNull: false,
    primaryKey: true
  },
  pw: {
    type: DataTypes.STRING(128),
    allowNull: false
  },
  name: {
    type: DataTypes.STRING(20),
    allowNull: false
  }
}, {
  sequelize,
  tableName: 'user'
});

module.exports = User;