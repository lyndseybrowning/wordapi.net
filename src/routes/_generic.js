import trie from '../trie';

const generics = (app) => {
  app.get('/exists/:word', (req, res) => {
    const word = req.params.word;
    res.send(trie.contains(word));
  });
}

module.exports = generics;
