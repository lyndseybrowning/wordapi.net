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

      const words = dict.split('\n');
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
  }
}

export default dictionary;
