const _trie = {};

const trie = {
  // returns the existing private _trie object
  get() {
    return _trie;
  },

  // Add a new word to the Trie
  // returns boolean
  add(word) {
    if(word == null || word === '') {
      return false;
    }

    let currentNode = _trie;
    word.toLowerCase().split('').forEach((letter, index) => {
      if(!currentNode[letter]) {
        currentNode[letter] = {};
      }
      // reached the end of the word?
      if(index === word.length - 1) {
        currentNode.$ = 1;
      } else {
        currentNode = currentNode[letter];
      }
    });

    return true;
  },

  // Checks to see if a word exists in the trie
  // returns boolean
  containsWord(word) {
      if(typeof word !== 'string') {
      	throw(`Invalid parameter passed to trie.containsWord(string word): ${word}. Expected string.`);
      }

    	if(word === '') {
        return false;
      }

      let currentNode = _trie;
      return word.split('').every((letter, index) => {
        if(!currentNode[letter]) {
        	return false;
        }
        currentNode = currentNode[letter];

        if(index === word.length - 1) {
          return currentNode.$ === 1;
        }
      	return letter;
      });
    },

    // checks that a prefix exists in the trie
    // returns boolean
    isValidPrefix(prefix) {
      let currentNode = _trie;

      return prefix.split('').every(letter => {
        if(!currentNode[letter]) {
          return false;
        }
        currentNode = currentNode[letter];
        return true;
      });
    }

};

export default trie;
