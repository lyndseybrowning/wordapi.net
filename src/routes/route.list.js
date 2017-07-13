module.exports = (app, dictionary) => {
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

    if (errors) {
      return res.status(500).send({
        url: req.url,
        errors,
      });
    }

    let wordList = [];

    if (prefix !== '') {
      wordList = dictionary.getPrefix(prefix);
    }

    res.send({
      wordsFound: wordList.length,
      wordList,
    });
  });
};
