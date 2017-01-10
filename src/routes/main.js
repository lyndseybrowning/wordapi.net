import trie from '../trie.js';

export default {
  init(app, dictionary) {
    app.get('/exists/:word', (req, res) => {
      const word = req.params.word;
      res.send(trie.containsWord(word, dictionary.wordList));
    });
  }
}
