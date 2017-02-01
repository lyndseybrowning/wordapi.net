import { expect } from 'chai';
import utils from '../../src/utils';

describe('getting a dictionary', () => {
  it('should return an error message when the first argument is not a string', () => {
    const actual = utils.getDictionary(123);
    const expected = 'The first argument must be a string';

    expect(actual).to.equal(expected);
  });

  it('should return an error message when given txt file is invalid', () => {
    expect(() => {
      utils.getDictionary('/some/invalid/path');
    }).to.throw('The first argument must be a txt file');
  });

  it('returns an array', () => {
    const testFile = `test/test.txt`;
    expect(utils.getDictionary(testFile)).to.be.a('array');
  });
});
