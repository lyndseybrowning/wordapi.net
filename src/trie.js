const fullTrie = {};

const addWord = (wordToAdd) => {
  const word = wordToAdd.replace(/\r/g, '');
  let node = fullTrie || {};

  if(word === '') {
    return null;
  }

  word.toLowerCase().split('').forEach((letter, index) => {
    node[letter] = node[letter] || {};
    node = node[letter];

    if(index === word.length - 1) {
      node.$ = 1;
    }
  });

  return true;
};

// reduces the Trie to the prefix branch
const getPrefix = (branch, node = fullTrie) => {
  const prefix = branch;
  return prefix.split('').reduce((acc, letter) => {
    let accumulator = Object.assign({}, acc);
    accumulator = accumulator[letter];

    return accumulator;
  }, node);
};

const recursePrefix = (prefix, node, wordList = []) => {
  let word = prefix;

  for(const n in node) {
    if(n === '$') {
      wordList.push(word.toUpperCase());
      word = '';
      continue;
    }
    recursePrefix(prefix + n, node[n], wordList);
  }

  return wordList;
};

const recurseSuffix = (suffix, node, wordList = [], word = '') => {
  for(const n in node) {
    if(n === '$' && word.slice(-suffix.length) === suffix) {
      wordList.push(word.toUpperCase());
      continue;
    }
    recurseSuffix(suffix, node[n], wordList, word + n);
  }

  return wordList;
};

const trie = {
  init(arrayOfWords) {
    arrayOfWords.forEach(addWord);
    return fullTrie;
  },

  get() {
    return fullTrie;
  },

  contains(word, trie = fullTrie) {
    if(word === '') {
      return false;
    }

    let node = trie;

    return word.split('').every((letter, index) => {
      if(!node[letter]) {
      	return false;
      }
      node = node[letter];

      if(index === word.length - 1) {
        return node.$ === 1;
      }
      return letter;
    });
  },

  isPrefix(prefix, trie) {
    let node = trie || fullTrie;

    return prefix.split('').every((entry) => {
      if(!node[entry]) {
        return false;
      }

      node = node[entry];
      return true;
    });
  },

  getLengthArray(length, trie = fullTrie) {
    return [];
  },

  getPrefixArray(prefix, trie = fullTrie) {
    if(!this.isPrefix(prefix)) {
      return [];
    }

    const node = getPrefix(prefix);
    return recursePrefix(prefix, node);
  },

  getSuffixArray(suffix, trie = fullTrie) {
    return recurseSuffix(suffix, trie);
  },
};

export default trie;
