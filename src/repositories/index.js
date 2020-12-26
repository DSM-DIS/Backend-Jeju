import { User, Diary } from "./definitions";

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

export {
  User,
  Diary 
};