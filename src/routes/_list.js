import trie from '../trie';
import dictionary from '../dictionary';

const list = app => {
  app.get('/api/list', (req, res) => {
    const length = req.query.length;
    const prefix = req.query.prefix;
    const suffix = req.query.suffix;

    req
      .check('length, prefix, suffix', 'At least one parameter is required')
      .atLeastOneRequired(length, prefix, suffix);

    req.checkQuery('prefix', 'Prefix should be a string').optional().isAlpha();
    req.checkQuery('suffix', 'Suffix should be a string').optional().isAlpha();
    req.checkQuery('length', 'Length should be a Number').optional().isInt();

    const errors = req.validationErrors();

    if(errors) {
      return res.send({
        url: req.url,
        errors,
      });
    }

    let wordList = dictionary.get();

    if(req.query.prefix) {
      wordList = trie.getPrefixArray(prefix.toLowerCase());
    }

    if(req.query.length) {
      wordList = dictionary.filterByLength(Number(length), wordList);
    }

    if(req.query.suffix) {
      wordList = dictionary.filterBySuffix(suffix.toUpperCase(), wordList);
    }

    res.send({
      wordsFound: wordList.length,
      wordList,
    });
  });
}

module.exports = list;
