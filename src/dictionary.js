import path from 'path';
import fs from 'fs';
import config from './config';

export default (array) => {
  if(!Array.isArray(array)) {
    return 'The first argument must be an array';
  }

  return {
    filterByLength(length) {
      if(typeof length !== 'number') {
        return 'The first argument must be a number';
      }

      return array.filter(word => word.length === length);
    },

    filterByPrefix(prefix) {
      if(typeof prefix === 'undefined') {
        return array;
      }

      if(typeof prefix !== 'string') {
        return 'The first argument must be a string';
      }

      return array.filter(word => word.substring(0, prefix.length) === prefix);
    },
  };
};
