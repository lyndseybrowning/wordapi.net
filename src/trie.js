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
  }
};

export default trie;
