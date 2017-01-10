import path from 'path';
import fs from 'fs';
import config from './config';
import trie from './trie';

const file = path.join(__dirname, config.dictionary.sowpods);
const dictionary = {
  init(callback) {
    if(!fs.existsSync(file)) {
      return callback(`Error: File does not exist: ${dictionary}`);
    }

    fs.readFile(file, 'utf8', (err, dict) => {
      if(err) {
        return callback(err);
      }

      const words = dict.split('\n');
      // add each word to the trie
      words.forEach((word) => {
        if(word !== '') {
          trie.add(word);
        }
      });

      if(callback && typeof callback === 'function') {
        return callback(null, {
          wordList: trie.get(),
          wordCount: words.length
        });
      }

      // return counter if no callback is passed
      return words.length;
    });
  }
}

export default dictionary;
