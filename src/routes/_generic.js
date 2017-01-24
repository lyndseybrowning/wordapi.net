import trie from '../trie';

const generic = (app) => {
  app.get('/api/valid/:word', (req, res) => {
    const word = req.params.word.toLowerCase();
    const valid = trie.contains(word);

    res.send({
      word,
      valid,
    });
  });
};

module.exports = generic;
