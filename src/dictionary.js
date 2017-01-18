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
    const wordList = [];
    length = parseInt(length, 10);   

    for (let i = 0, len = dictionary.length; i < len; i++) {
      const word = dictionary[i];

      if(word.length === length) {
        wordList.push(word);
      }
    }
    return wordList;
  },

  filterBySuffix(suffix, dictionary = _dictionary) {
    const wordList = [];
    const suffixLen = suffix.length;

    for (let i = 0, len = dictionary.length; i < len; i++) {
      const word = dictionary[i];
      const wordLen = word.length;
      const wordSuffix = word.substring(wordLen - suffixLen, wordLen);

      if(wordSuffix === suffix.toUpperCase()) {
        wordList.push(word);
      }
    }
    return wordList;
  }
}

export default dictionary;
