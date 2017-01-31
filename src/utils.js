import fs from 'fs';
import path from 'path';
import config from './config';

const toLower = (word) => {
  return word.toLowerCase();
};

export default {
  getDictionary(dictionary = config.dictionary.sowpods) {
    const file = path.join(__dirname, dictionary);

    return fs.readFileSync(file)
      .toString()
      .split('\r\n')
      .map(toLower);
  },
};
