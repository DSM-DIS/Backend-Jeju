const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const { expect } = chai;

const DiaryService = require('./fakes/fakeDiaryRepository');
const { badRequest, notFoundDiary, notFoundPage } = require('../errors');

describe('# Diary Service Test', () => {
  describe('# Get page from diary', () => {
    const correct_result = {
      page: 1,
      content: 'test1'
    };

    it('Get 1 page form diary_book_id = 1', async () => {
      try {
        const result = await DiaryService.readingDiary(1, 1);
        expect(result).to.be.deep.equal(correct_result);
      } catch (error) {
        expect.fail(error.message);
      }
    });

    it('Not found Diary', async () => {
      await expect(DiaryService.readingDiary(2, 1))
        .to.be.rejectedWith(notFoundDiary);
    });

    it('Not found Page', async () => {
      await expect(DiaryService.readingDiary(1, 8))
        .to.be.rejectedWith(notFoundPage);
    });

    it('It was bad request', async () => {
      await expect(DiaryService.readingDiary())
        .to.be.rejectedWith(badRequest);
    });
  });
});