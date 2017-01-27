import path from 'path';
import fs from 'fs';
import config from './config';

const dictionary = function() {
  const words = [];

  return {
    init() {
      if(words.length) {
        return words;
      }

      const file = path.join(__dirname, config.dictionary.sowpods);
      const array = fs.readFileSync(file).toString().split('\r\n');

      return array;
    },

    get() {
      if(!words.length) {
        return this.init();
      }

      return words;
    },

    filterByLength(length, dictionary = words) {
      return dictionary.filter(word => word.length === length);
    },
    
  };
};

export default dictionary();
