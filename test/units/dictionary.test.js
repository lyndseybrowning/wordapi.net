import { expect } from 'chai';
import dictionary from '../../src/dictionary';

describe('Dictionary', () => {
  it('returns an error message when the first argument is not an array', () => {
    const expected = 'The first argument must be an array';

    expect(() => dictionary('abc')).to.throw(expected);
    expect(dictionary()).to.be.a('object');
  });

  it('returns an object literal', () => {
    const actual = dictionary(['cat', 'dog']);
    const expected = 'object';
    expect(actual).to.be.a(expected);
  });

  describe('Filtering by length', () => {
    const words = dictionary(['dog', 'cat', 'tiger', 'lion', 'leopard']);
    const length = 3;

    it('returns an error message when the first argument is not a number', () => {
      const expected = 'The first argument must be a number';

      expect(() => words.filterByLength('abc')).to.throw(expected);
    });

    it('filters the dictionary by length and returns a new array', () => {
      const actual = words.filterByLength(length);
      const expected = ['dog', 'cat'];

      expect(actual).to.deep.equal(expected);
    });

    it('throws when the second argument is not an array', () => {
      expect(() => {
        words.filterByLength(4, 'abc');
      }).to.throw('The second argument must be an array');
    });
  });

  describe('Filtering by prefix', () => {
    const array = ['car', 'camper', 'taxi', 'sailboat', 'caravan', 'plane'];
    const words = dictionary(array);

    it('accepts a custom array as a parameter', () => {
      const actual = words.filterByPrefix('c', ['car', 'camper', 'dog']);
      const expected = ['car', 'camper'];

      expect(actual).to.deep.equal(expected);
    });

    it('returns the whole dictionary when the prefix is undefined', () => {
      const actual = words.filterByPrefix();
      const expected = array;

      expect(actual).to.deep.equal(expected);
    });

    it('returns an error when the prefix is not a string', () => {
      const expected = 'The first argument must be a string';

      expect(() => words.filterByPrefix(123)).to.throw(expected);
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

    it('throws when the second argument is not an array', () => {
      expect(() => {
        words.filterByPrefix('abc', 'abc');
      }).to.throw('The second argument must be an array');
    });
  });

  describe('Filtering by suffix', () => {
    const array = ['hello', 'world', 'go', 'javascript'];
    const words = dictionary(array);

    it('accepts a custom array as a parameter', () => {
      const actual = words.filterBySuffix('r', ['car', 'camper', 'dog']);
      const expected = ['car', 'camper'];

      expect(actual).to.deep.equal(expected);
    });

    it('returns the whole dictionary when the suffix is undefined', () => {
      const actual = words.filterBySuffix();
      const expected = array;

      expect(actual).to.deep.equal(expected);
    });

    it('returns an error when the suffix is not a string', () => {
      const expected = 'The first argument must be a string';

      expect(() => words.filterBySuffix(123)).to.throw(expected);
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

    it('throws when the second argument is not an array', () => {
      expect(() => {
        words.filterBySuffix('ing', 'abc');
      }).to.throw('The second argument must be an array');
    });
  });
});
