import path from 'path';
import fs from 'fs';
import config from './config';
import trie from './trie';

let _dictionary = []; // stores txt file as array

const file = path.join(__dirname, config.dictionary.sowpods);
const dictionary = {
  init(callback) {
    if(!fs.existsSync(file)) {
      return callback(`Dictionary.init(): file does not exist: ${file}`);
    }

    fs.readFile(file, 'utf8', (err, dict) => {
      if(err) {
        return callback(err);
      }

      const words = dict.split('\r\n');
      const wordList = trie.init(words);

      _dictionary = words;

      if(callback && typeof callback === 'function') {
        return callback(null, wordList);
      }
      return wordList;
    });
  },

  get() {
    return _dictionary;
  },

  filterByLength(length, dictionary = _dictionary) {
    length = parseInt(length, 10);

    const wordList = [];

    for (let i = 0, len = dictionary.length; i < len; i++) {
      let word = dictionary[i];

      if(word.length === length) {
        wordList.push(word);
      }
    }
    return wordList;
  }
}

export default dictionary;
