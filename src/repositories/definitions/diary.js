const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../../loaders/database');

class Diary extends Model {
  static async createPage(diaryBook, author) {
    await Diary.create({
      diary_book_id: diaryBook,
      author: author
    });
  }
  
  static async getContent(diaryBook, page) {
    return await Diary.findOne({
      attributes: ['content'],
      where: { diary_book_id: diaryBook },
      offset: page - 1
    });
  }

  static async writingContent(id, content) {
    await Diary.update({ content: content }, {
      where: { id: id }
    });
  }
}

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