import utils from '../utils';
import trieModule from '../trie';

const trie = trieModule(utils.getDictionary());

module.exports = (app) => {
  app.get('/api/valid/:word', (req, res) => {
    const word = req.params.word.toLowerCase();
    const valid = trie.contains(word);

    res.send({
      word,
      valid,
    });
  });
};
