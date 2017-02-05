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

    filterByLength(length, custom = []) {
      if(typeof length !== 'number') {
        throw('The first argument must be a number');
      }

      if(!Array.isArray(custom)) {
        throw('The second argument must be an array');
      }

      const list = custom.length > 0 ? custom : dictionary;

      return list.filter(word => word.length === length);
    },

    filterByPrefix(prefix, custom = []) {
      if(typeof prefix === 'undefined') {
        return dictionary;
      }

      if(typeof prefix !== 'string') {
        throw('The first argument must be a string');
      }

      if(!Array.isArray(custom)) {
        throw('The second argument must be an array');
      }

      const list = custom.length > 0 ? custom : dictionary;

      return list.filter((word) => {
        return word.substring(0, prefix.length) === prefix.toLowerCase();
      });
    },

    filterBySuffix(suffix, custom = []) {
      if(typeof suffix === 'undefined') {
        return dictionary;
      }

      if(typeof suffix !== 'string') {
        throw('The first argument must be a string');
      }

      if(!Array.isArray(custom)) {
        throw('The second argument must be an array');
      }

      const list = custom.length > 0 ? custom : dictionary;

      return list.filter((word) => {
        const wordLen = word.length;
        const startAt = wordLen - suffix.length;
        return word.substring(startAt, wordLen) === suffix.toLowerCase();
      });
    },
  };
};
