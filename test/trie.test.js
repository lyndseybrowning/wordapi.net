import { expect } from 'chai';
import trie from '../src/trie';

describe('Trie', () => {
  it('returns an error when the first argument is not an array', () => {
    const actual = trie('hello');
    const expected = 'The first argument must be an array';

    expect(actual).to.equal(expected);
  });

  it('returns an object', () => {
    const actual = trie(['word']);
    const expected = 'object';

    expect(actual).to.be.a(expected);
  });

  describe('retrieving the trie', () => {
    it('returns the full dictionary as a trie in lowercase', () => {
      const { get } = trie(['word', 'words']);
      const expected = {
        w: {
          o: {
            r: {
              d: {
                $: 1,
                s: {
                  $: 1
                }
              }
            }
          }
        }
      };

      expect(get()).to.deep.equal(expected);
    });

    describe('validating a word', () => {
      it('returns an error message when the first argument is not a string', () => {
        const { contains } = trie(['dog', 'cat']);
        const actual = contains(123);
        const expected = 'The first argument must be a string';

        expect(actual).to.equal(expected);
      });

      it('checks the word exists and returns a boolean', () => {
        const { contains } = trie(['dog', 'cat', 'tiger', 'squirrel']);

        expect(contains('lizard')).to.equal(false);
        expect(contains('dog')).to.equal(true);
        expect(contains('TIGER')).to.equal(true);
      });
    });

    describe('filtering by prefix', () => {
      const { filterPrefix } = trie(['dog', 'cat', 'car', 'sky', 'castle', 'friend']);

      it('returns an error message when the first argument is not a string', () => {
        const actual = filterPrefix(124);
        const expected = 'The first argument must be a string';

        expect(actual).to.equal(expected);
      });

      it('returns filtered words as an array', () => {
        const actual = filterPrefix('d');
        const expected = 'array';

        expect(actual).to.be.a(expected);
      });

      it('returns an empty array when the prefix does not exist', () => {
        expect(filterPrefix('z').length).to.equal(0);
      });

      it('filters the existing trie into an array of valid words', () => {
       expect(filterPrefix('f')).to.deep.equal(['friend']);
       expect(filterPrefix('x')).to.deep.equal([]);
       expect(filterPrefix('cas')).to.deep.equal(['castle']);
       expect(filterPrefix('ca')).to.deep.equal(['cat', 'car', 'castle']);
      });
    });
  });
});
