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
      const expected = ['DOG', 'CAT'];

      expect(actual).to.deep.equal(expected);
    });
  });

  describe('Filtering by prefix', () => {
    const array = ['CAR', 'CAMPER', 'TAXI', 'SAILBOAT', 'CARAVAN', 'PLANE'];
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

    it('filters the dictionary by prefix and returns a new array', () => {
      const actual = words.filterByPrefix('CA');
      const expected = ['CAR', 'CAMPER', 'CARAVAN'];

      expect(actual).to.deep.equal(expected);
    });
  });
});
