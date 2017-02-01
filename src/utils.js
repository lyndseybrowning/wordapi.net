import fs from 'fs';
import path from 'path';
import config from './config';

const toLower = (word) => {
  return word.toLowerCase();
};

export default {
  getDictionary(dictionary = config.dictionary.sowpods) {
    if(typeof dictionary !== 'string') {
      return 'The first argument must be a string';
    }

    try {
      const file = path.join(dictionary);

      return fs.readFileSync(file)
        .toString()
        .split('\r\n')
        .map(toLower);
    } catch(e) {
      throw('The first argument must be a txt file');
    }
  },
};
