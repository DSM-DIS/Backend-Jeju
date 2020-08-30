const { User, Diary } = require('./definitions');

User.hasMany(Diary, {
  foreignKey: 'author',
  sourceKey: 'id',
  onUpdate: 'CASCADE'
});

Diary.belongsTo(User, {
  foreignKey: 'author',
  targetKey: 'id',
  onUpdate: 'CASCADE'
});

module.exports = { User, Diary };