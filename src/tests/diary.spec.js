const assert = require('assert');

const DiaryService = require('./fakes/fakeDiaryRepository');
const { notFoundDiary, notFoundPage } = require('../errors');

describe('# Diary Service Test', () => {
  describe('# Get page from diary', () => {
    const correct_result = {
      page: 1,
      content: 'test1'
    };

    it('Get 1 page form diary_book_id = 1', async () => {
      try {
        const result = await DiaryService.readingDiary(1, 1);
        assert.deepEqual(correct_result, result);
      } catch (error) {
        assert.fail(error.message);
      }
    });

    it('Not found Diary', async () => {
      await assert.rejects(DiaryService.readingDiary(2, 1),
        notFoundDiary);
    });

    it('Not found Page', async() => {
      await assert.rejects(DiaryService.readingDiary(1, 8),
        notFoundPage);
    });
  });
});