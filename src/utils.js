import fs from 'fs';
import path from 'path';
import config from './config';

const toLower = (word) => {
  return word.toLowerCase();
};

const removeEmptyEntries = (entry) => {
  return entry !== '';
};

export default {
  getDictionary(dictionary = config.dictionary.sowpods) {
    if(typeof dictionary !== 'string') {
      return 'The first argument must be a string';
    }

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
};
