const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const { expect } = chai;

const FakePages = require('./fakes/fakePages');
const { badRequest, notFoundDiary} = require('../errors');

describe('# GetLastPage util test', () => {
  it('Get diary_book_id = 1 Last Page', async () => {
    try {
      const result = await FakePages.getLastPage(1);
      expect(result).to.equal(1);
    } catch (error) {
      expect.fail(error.message);
    }
  });

  it('Failed to find request diary', async () => {
    await expect(FakePages.getLastPage(2)).to.be.rejectedWith(notFoundDiary);
  });

  it('It was a bad request', async () => {
    await expect(FakePages.getLastPage()).to.be.rejectedWith(badRequest);
  });
});