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

const getPrefix = function(prefix, trie) {
  let node = { ...trie };

  const hasPrefix = prefix.split('').every((letter) => {
    if(!node[letter]) {
      return false;
    }
    return node = node[letter];
  });

  if(!hasPrefix) {
    return {};
  }

  return node;
};

const recursePrefix = function(prefix, prefixFromTrie, wordsFound = []) {
  let currentWord = prefix;

  for(const node in prefixFromTrie) {
    if(node === '$') {
      wordsFound.push(currentWord);
      currentWord = '';
      continue;
    }
    recursePrefix(prefix + node, prefixFromTrie[node], wordsFound);
  }

  return wordsFound;
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

    filterPrefix(prefix) {
      if(typeof prefix !== 'string') {
        return 'The first argument must be a string';
      }

      const prefixFromTrie = getPrefix(prefix, trie);

      if(Object.keys(prefixFromTrie).length === 0) {
        return [];
      }

      return recursePrefix(prefix, prefixFromTrie);
    },
  };
};
