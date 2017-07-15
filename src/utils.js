import fs from 'fs';
import path from 'path';
import config from './config';
import trie from 'trie-prefix-tree';

const toLower = word => word.toLowerCase();

export default {
  loadDictionary(pathToFile = config.dictionary.sowpods) {  
    const removeEmptyEntries = (entry) => {
      return entry !== '';
    };

    try {
      const file = path.join(__dirname, pathToFile);
      const items = fs.readFileSync(file)
        .toString()
        .split(/\r?\n/)
        .filter(removeEmptyEntries)
        .map(toLower);

      const dictionary = this.createDictionary(items);

      return dictionary;
    } catch(e) {
      throw('loadDictionary expects a valid path');
    }
  },

  createDictionary(dictionary) {
    return trie(dictionary);
  },

  toLower,

  filterByLength(list, length) {
    return list.filter(word => word.length === length);
  },

  filterBySuffix(list, suffix) {
      return list.filter((word) => {
        const wordLen = word.length;
        const startAt = wordLen - suffix.length;
        return word.substring(startAt, wordLen) === suffix.toLowerCase();
      });
    },
};
