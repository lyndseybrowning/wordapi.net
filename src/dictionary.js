import path from 'path';
import fs from 'fs';
import config from './config';

export default (array) => {
  if(!Array.isArray(array)) {
    return 'The first argument must be an array';
  }

  array = array.map(word => word.toLowerCase());

  return {
    get() {
      return array;
    },

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

      return array.filter(word => word.substring(0, prefix.length) === prefix.toLowerCase());
    },

    filterBySuffix(suffix) {
      if(typeof suffix === 'undefined') {
        return array;
      }

      if(typeof suffix !== 'string') {
        return 'The first argument must be a string';
      }

      return array.filter((word) => {
        const wordLen = word.length;
        const startAt = wordLen - suffix.length;
        return word.substring(startAt, wordLen) === suffix.toLowerCase();
      });
    },
  };
};
