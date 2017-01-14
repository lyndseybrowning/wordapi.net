import trie from '../trie';
import dictionary from '../dictionary';

const _dictionary = dictionary.get();

function filterByLength(length, word) {
  return word.length === length;
}

const lists = (app) => {
  app.get('/api/lists', (req, res) => {
    const length = req.query.length;
    const prefix = req.query.prefix;
    const suffix = req.query.suffix;

    req.check('length, prefix, suffix', 'At least one parameter is required').atLeastOneRequired(length, prefix, suffix);
    req.checkQuery('prefix', 'Prefix should be a string').optional().isAlpha();
    req.checkQuery('suffix', 'Suffix should be a string').optional().isAlpha();
    req.checkQuery('length', 'Length should be a Number').optional().isInt();

    const errors = req.validationErrors();

    if(errors) {
      return res.send({
        errors: errors
      });
    }

    const wordList = _dictionary.filter(filterByLength.bind(null, parseInt(length, 10)));

    res.send({
      wordsFound: wordList.length,
      wordList
    });
  });
}

module.exports = lists;
