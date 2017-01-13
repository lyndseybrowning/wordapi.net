import trie from '../trie';
import dictionary from '../dictionary';

const _dictionary = dictionary.get();

function filterByLength(length, word) {
  return word.length === length;
}

const lists = (app) => {
  app.get('/api/lists', (req, res) => {
    const length = parseInt(req.query.length, 10);
    const wordList = _dictionary.filter(filterByLength.bind(null, length));

    res.send({
      wordLength: length,
      wordsFound: wordList.length,
      wordList
    });
  });
}

module.exports = lists;
