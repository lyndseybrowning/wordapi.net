import { expect } from 'chai';
import dictionary from '../src/dictionary';

describe('Dictionary', () => {
  it('returns an error message when the first argument is not an array', () => {
    const actual = dictionary('abc');
    const expected = 'The first argument must be an array';
    expect(actual).to.equal(expected);
  });

  it('returns an object literal', () => {
    const actual = dictionary(['CAT', 'DOG']);
    const expected = 'object';
    expect(actual).to.be.a(expected);
  });

  describe('Retrieving the full dictionary', () => {
    it('should be returned in lowercase', () => {
      const { get } = dictionary(['CAT', 'DOG']);
      const expected = ['cat', 'dog'];

      expect(get()).to.deep.equal(expected);
    });
  });

  describe('Filtering by length', () => {
    const words = dictionary(['DOG', 'CAT', 'TIGER', 'LION', 'LEOPARD']);
    const length = 3;

    it('returns an error message when the first argument is not a number', () => {
      const actual = words.filterByLength('abc');
      const expected = 'The first argument must be a number';

      expect(actual).to.equal(expected);
    });

    it('filters the dictionary by length and returns a new array', () => {
      const actual = words.filterByLength(length);
      const expected = ['dog', 'cat'];

      expect(actual).to.deep.equal(expected);
    });
  });

  describe('Filtering by prefix', () => {
    const array = ['car', 'camper', 'taxi', 'sailboat', 'caravan', 'plane'];
    const words = dictionary(array);

    it('returns the whole dictionary when the prefix is undefined', () => {
      const actual = words.filterByPrefix();
      const expected = array;

      expect(actual).to.deep.equal(expected);
    });

    it('returns an error when the prefix is not a string', () => {
      const actual = words.filterByPrefix(123);
      const expected = 'The first argument must be a string';

      expect(actual).to.equal(expected);
    });

    it('transforms the prefix to lowercase', () => {
      const actual = words.filterByPrefix('C');
      const expected = ['car', 'camper', 'caravan'];

      expect(actual).to.deep.equal(expected);
    });

    it('filters the dictionary by prefix and returns a new array', () => {
      const actual = words.filterByPrefix('ca');
      const expected = ['car', 'camper', 'caravan'];

      expect(actual).to.deep.equal(expected);
    });
  });

  describe('Filtering by suffix', () => {
    const array = ['hello', 'world', 'go', 'javascript'];
    const words = dictionary(array);

    it('returns the whole dictionary when the suffix is undefined', () => {
      const actual = words.filterBySuffix();
      const expected = array;

      expect(actual).to.deep.equal(expected);
    });

    it('returns an error when the suffix is not a string', () => {
      const actual = words.filterBySuffix(123);
      const expected = 'The first argument must be a string';

      expect(actual).to.equal(expected);
    });

    it('transforms the suffix to lowercase', () => {
      const actual = words.filterBySuffix('O');
      const expected = ['hello', 'go'];

      expect(actual).to.deep.equal(expected);
    });

    it('filters the dictionary by suffix and returns a new array', () => {
      const actual = words.filterBySuffix('t');
      const expected = ['javascript'];

      expect(actual).to.deep.equal(expected);
    });
  });
});
