import utils from '../utils';

module.exports = (app, dictionary) => {
  app.get('/api/list', (req, res) => {
    const length = req.query.length;
    const prefix = req.query.prefix;
    const suffix = req.query.suffix;

    req
      .check('', 'Expected one or more parameters: length, prefix and suffix')
      .atLeastOneRequired(length, prefix, suffix);

    req.checkQuery('prefix', 'prefix should be a string').optional().isAlpha();
    req.checkQuery('suffix', 'suffix should be a string').optional().isAlpha();
    req.checkQuery('length', 'length should be a Number').optional().isInt();

    req.getValidationResult().then((result) => {
      if (!result.isEmpty()) {
        const errors = result.array()[0];

        return res.status(400).send({
          url: req.url,
          errors: `${errors.msg}`,
        });
      }

      let wordList = [];

      if (prefix) {
        wordList = dictionary.getPrefix(prefix, false);
      }

      if (wordList.length === 0) {
          wordList = dictionary.getWords(false);
      }

      if (length) {
        wordList = utils.filterByLength(wordList, parseInt(length, 10));
      }

      if (suffix) {
        wordList = utils.filterBySuffix(wordList, suffix);
      }

      res.send({
        wordsFound: wordList.length,
        wordList,
      });
    });
  });
};
