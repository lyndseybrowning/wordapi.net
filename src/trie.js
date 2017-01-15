let _trie = {};

function addWord(word) {
  if(word === '') {
    return null;
  }

  word = word.replace(/\r/g, '');

  let node = _trie;
  word.toLowerCase().split('').forEach((letter, index) => {
    node[letter] = node[letter] || {};
    node = node[letter];

    if(index === word.length - 1) {
      node.$ = 1;
    }
  });
}

function getPosition(word, trie) {
  let node = trie;

  word.split('').forEach(letter => {
    node = node[letter];
  });

  return node;
}

const trie = {
  init(arrayOfWords) {
    arrayOfWords.forEach(addWord);
    return _trie;
  },

  get() {
    return _trie;
  },

  contains(word, trie = _trie) {
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

  isPrefix(prefix, trie = _trie) {
    let node = trie;

    return prefix.split('').every(entry => {
      if(!node[entry]) {
        return false;
      }

      node = node[entry];
      return true;
    });
  },

  filterByPrefix(prefix, trie = _trie) {
    const wordList = [];
    prefix = prefix.toLowerCase();

    if(!this.isPrefix(prefix)) {
      return [];
    }

    const startPoint = getPosition(prefix, trie);

    if(startPoint.$ === 1) {
      wordList.push(prefix);
    }

    return wordList;
  }
};

export default trie;
