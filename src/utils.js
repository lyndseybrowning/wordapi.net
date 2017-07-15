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

    randomiseWord(word) {
      const shuffle = [...word];

      word.split('').forEach((letter, index) => {
        const randomPos = Math.floor(Math.random() * (index + 1));
        const letterAtRandomPos = shuffle[randomPos];

        shuffle[randomPos] = letter;
        shuffle[index] = letterAtRandomPos;
      });
      
      return shuffle;
    },

    randomiseList(list) {
      return list.map((word) => {
        const shuffle = this.randomiseWord(word);

        return {
          anagram: shuffle.join(''),
          word,
        };
      });
    },
};
