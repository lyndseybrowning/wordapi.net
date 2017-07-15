import { expect } from 'chai';
import utils from '../../src/utils';

describe('load dictionary', () => {
  it('throws when the given input file is invalid', () => {
    expect(() => {
      utils.loadDictionary('/some/invalid/path');
    }).to.throw();
  });

  it('returns an object', () => {
    const testFile = `../test/test.txt`;
    const actual = utils.loadDictionary(testFile);
    const expected = ['hello', 'world'];

    expect(actual).to.be.a('object');
  });
});

describe('converting to lowercase', () => {
  const actual = utils.toLower('ABC');
  const expected = 'abc';

  expect(actual).to.equal(expected);
});
