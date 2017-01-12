import trie from '../trie';

const generics = (app) => {
  app.get('/api/valid/:word', (req, res) => {
    const word = req.params.word;

    res.send({
      word,
      valid: trie.contains(word)
    });
  });
}

module.exports = generics;
