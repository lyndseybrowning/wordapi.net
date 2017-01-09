import path from 'path';
import fs from 'fs';
import config from './config';

const dictionary = path.join(__dirname, config.dictionary.sowpods);
const init = (callback) => {
  let wordCount = 0;
  let words = [];

  fs.readFile(dictionary, 'utf8', (err, dict) => {
    if(err) {
      throw err;
    }

    words = dict.split('\n');
    words.forEach((word) => {
      if(word !== '') {
        // do something with the word
      }
    });

    if(callback && typeof callback === 'function') {
      return callback(words.length);
    }
  });

  return null;
}

export default {
  init
};
