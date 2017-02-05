import utils from './utils';

const DEFAULT_DICT = utils.getDictionary();

export default (dictionary = DEFAULT_DICT) => {
  if(!Array.isArray(dictionary)) {
    throw('The first argument must be an array');
  }

  return {
    get() {
      return dictionary;
    },

    filterByLength(length) {
      if(typeof length !== 'number') {
        throw('The first argument must be a number');
      }

      return dictionary.filter(word => word.length === length);
    },

    filterByPrefix(prefix) {
      if(typeof prefix === 'undefined') {
        return dictionary;
      }

      if(typeof prefix !== 'string') {
        throw('The first argument must be a string');
      }

      return dictionary.filter((word) => {
        return word.substring(0, prefix.length) === prefix.toLowerCase();
      });
    },

    filterBySuffix(suffix) {
      if(typeof suffix === 'undefined') {
        return dictionary;
      }

      if(typeof suffix !== 'string') {
        throw('The first argument must be a string');
      }

      return dictionary.filter((word) => {
        const wordLen = word.length;
        const startAt = wordLen - suffix.length;
        return word.substring(startAt, wordLen) === suffix.toLowerCase();
      });
    },
  };
};
