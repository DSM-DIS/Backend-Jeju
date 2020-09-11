const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const { expect } = chai;

const { getLastId } = require('../utils');
const { Diary } = require('../repositories');
const { notFoundDiary } = require('../errors');

describe('# print last id', () => {
  it('console.log()', async () => {
    try {
      const id = await getLastId(Diary, 1);
      console.log(id);
    } catch (error) {
      console.error(error);
    }
  });

  it('error', async () => {
    await expect(getLastId(Diary, 2))
      .to.be.rejectedWith(notFoundDiary);
  });
});