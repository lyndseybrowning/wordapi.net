import fs from 'fs';
import path from 'path';
import config from './config';

export default {
  getDictionary(dictionary = config.dictionary.sowpods) {  
    if(typeof dictionary !== 'string') {
      throw('The first argument must be a string');
    }

    const removeEmptyEntries = (entry) => {
      return entry !== '';
    };

    try {
      const file = path.join(__dirname, dictionary);

      return fs.readFileSync(file)
        .toString()
        .split(/\r?\n/)
        .filter(removeEmptyEntries)
        .map(toLower);
    } catch(e) {
      throw('The first argument must be a txt file');
    }
  },

  toLower(word) {
    return word.toLowerCase();
  }
};
