const addWord = function(trie, word) {
  let node = trie;

  word.toLowerCase().split('').forEach((letter, index) => {
    node[letter] = node[letter] || {};
    node = node[letter];

    if(index === word.length - 1) {
      node.$ = 1;
    }
  });

  return trie;
};

const createTrie = function(dictionary) {
  return dictionary.reduce((trie, word) => {
    return addWord(trie, word);
  }, {});
};

export default (dictionary) => {
  if(!Array.isArray(dictionary)) {
    return 'The first argument must be an array';
  }

  const trie = createTrie(dictionary);

  return {
    get() {
      return trie;
    },

    contains(word) {
      if(typeof word !== 'string') {
        return 'The first argument must be a string';
      }

      const letters = word.toLowerCase().split('');
      let node = { ...trie };

      return letters.every((letter, index) => {
        if(!node[letter]) {
          return false;
        }

        node = node[letter];

        if(index === word.length - 1) {
          return node.$ === 1;
        }

        return true;
      });
    },
  };
};
