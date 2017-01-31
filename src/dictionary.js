export default (dictionary) => {
  if(!Array.isArray(dictionary)) {
    return 'The first argument must be an array';
  }

  const hasUpperCase = dictionary.some(word => word.toUpperCase() === word);

  if(hasUpperCase) {
    return 'The dictionary should be in lowercase';
  }

  return {
    get() {
      return dictionary;
    },

    filterByLength(length) {
      if(typeof length !== 'number') {
        return 'The first argument must be a number';
      }

      return dictionary.filter(word => word.length === length);
    },

    filterByPrefix(prefix) {
      if(typeof prefix === 'undefined') {
        return dictionary;
      }

      if(typeof prefix !== 'string') {
        return 'The first argument must be a string';
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
        return 'The first argument must be a string';
      }

      return dictionary.filter((word) => {
        const wordLen = word.length;
        const startAt = wordLen - suffix.length;
        return word.substring(startAt, wordLen) === suffix.toLowerCase();
      });
    },
  };
};
