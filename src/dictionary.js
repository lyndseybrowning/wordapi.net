import path from 'path';
import fs from 'fs';
import config from './config';
import trie from './trie';

let fullDictionary = []; // stores txt file as array

const file = path.join(__dirname, config.dictionary.sowpods);
const dictionary = {
  init(callback) {
    if(!fs.existsSync(file)) {
      return callback(`Dictionary.init(): file does not exist: ${file}`);
    }

    try {
      const words = fs.readFileSync(file).toString().split('\r\n');

      fullDictionary = words;
      trie.init(words);

      if(callback && typeof callback === 'function') {
        return callback(null);
      }

    } catch(err) {
      return callback(err);
    }
  },

  get() {
    return fullDictionary;
  },

  filterByLength(length, dictionary = fullDictionary) {
    const wordList = [];

    for(let i = 0, len = dictionary.length; i < len; i++) {
      const word = dictionary[i];

      if(word.length !== length) {
        continue;
      }
      wordList.push(word);
    }
    return wordList;
  },

  filterBySuffix(suffix, dictionary = fullDictionary) {
    const wordList = [];
    const suffixLen = suffix.length;

    for(let i = 0, len = dictionary.length; i < len; i++) {
      const word = dictionary[i];
      const wordLen = word.length;
      const wordSuffix = word.substring(wordLen - suffixLen, wordLen);

      if(wordSuffix !== suffix) {
        continue;
      }
      wordList.push(word);
    }
    return wordList;
  },
};

export default dictionary;
