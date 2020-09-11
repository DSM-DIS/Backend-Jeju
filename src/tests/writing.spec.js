const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const { expect } = chai;

const { Diary } = require('../repositories');
const DiaryService = require('../services/diary');
const diaryService = new DiaryService(Diary);
const { badRequest } = require('../errors');

describe('# Diary Writing Test', () => {
  it('writing should success', async () => {
    try {
      const id = await diaryService.writingDiary(1, 'test1');
      console.log(id);
    } catch (error) {
      console.error(error);
    }
  });

  it('400 : Bad Request - case 1', async () => {
    await expect(diaryService.writingDiary())
      .to.be.rejectedWith(badRequest);
  });

  it('400 : Bad Request - case 2', async () => {
    await expect(diaryService.writingDiary(2))
      .to.be.rejectedWith(badRequest);
  });
});