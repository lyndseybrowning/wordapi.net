import trie from '../trie.js';

export default {
  init(app) {
    app.get('/exists/:word', (req, res) => {
      const word = req.params.word;
      res.send(trie.contains(word));
    });
  }
}
