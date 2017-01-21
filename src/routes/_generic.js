import trie from '../trie';

const generics = app => {
  app.get('/api/valid/:word', (req, res) => {
    const word = req.params.word;
    const valid = trie.contains(word);

    res.send({
      word,
      valid,
    });
  });
}

module.exports = generics;
