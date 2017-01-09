import path from 'path';
import fs from 'fs';
import config from './config';

const dictionary = path.join(__dirname, config.dictionary.sowpods);
const init = (callback) => {

  if(!fs.existsSync(dictionary)) {
    return callback(`Error: File does not exist: ${dictionary}`);
  }

  fs.readFile(dictionary, 'utf8', (err, dict) => {

    if(err) {
      return callback(err);
    }

    const words = dict.split('\n');
    words.forEach((word) => {
      if(word !== '') {
        // do something with the word
      }
    });

    if(callback && typeof callback === 'function') {
      return callback(null, {
        wordCount: words.length
      });
    }

    // return counter if no callback is passed
    return words.length;
  });
}

export default {
  init
};
