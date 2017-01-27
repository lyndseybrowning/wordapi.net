import { expect } from 'chai';
import dictionary from '../src/dictionary';

describe('Dictionary', () => {
  let words;

  beforeEach(() => {
    words = dictionary.init();
  });

	describe('#init()', () => {
    it('should return an array', () => {
      expect(words).to.be.a('array');
    });

    it('should not return an empty array', () => {
      expect(words.length).not.equal(0);
    });
  });

  describe('#get()', () => {
    it('should return an array', () => {
      expect(dictionary.get()).to.be.a('array');
    });

    it('should return an instance of the dictionary created by init()', () => {
      expect(dictionary.get().length).to.equal(words.length);
    });
  });

  describe('#filterByLength()', () => {
    it('should return an array', () => {
      const actual = dictionary.filterByLength(10);

      expect(actual).to.be.a('array');
    });

    it('should return an array of words filtered by length', () => {
      const words = ['BOAT', 'CAR', 'BUS'];
      const length = 3;
      const expected = ['CAR', 'BUS'];
      const actual = dictionary.filterByLength(length, words);

      expect(expected).to.deep.equal(actual);
    });

    it('should not modify the global dictionary array', () => {
      const filtered = dictionary.filterByLength(10);
      const get = dictionary.get();

      expect(get.length).to.equal(words.length);
    });
  });

  describe('#filterByPrefix()', () => {
    it('should not modify the global dictionary array');
    it('should accept a parameter of type String');
    it('should return an array of words that start with the requested prefix');
  });

  describe('#filterBySuffix()', () => {
    it('should not modify the global dictionary array');
    it('should accept a parameter of type String');
    it('should return an array of words that end with the requested suffix');
  });
});
