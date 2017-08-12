'use strict';

var _utils = require('../utils');

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (app, dictionary) {
  app.get('/api/list', function (req, res) {
    var length = req.query.length;
    var prefix = req.query.prefix;
    var suffix = req.query.suffix;

    req.check('', 'Expected one or more parameters: length, prefix and suffix').atLeastOneRequired(length, prefix, suffix);

    req.checkQuery('prefix', 'prefix should be a string').optional().isAlpha();
    req.checkQuery('suffix', 'suffix should be a string').optional().isAlpha();
    req.checkQuery('length', 'length should be a Number').optional().isInt();

    req.getValidationResult().then(function (result) {
      if (!result.isEmpty()) {
        var errors = result.array()[0];

        return res.status(400).send({
          url: req.url,
          errors: '' + errors.msg
        });
      }

      var wordList = [];

      if (prefix) {
        wordList = dictionary.getPrefix(prefix, false);
      }

      if (wordList.length === 0) {
        wordList = dictionary.getWords(false);
      }

      if (length) {
        wordList = _utils2.default.filterByLength(wordList, parseInt(length, 10));
      }

      if (suffix) {
        wordList = _utils2.default.filterBySuffix(wordList, suffix);
      }

      res.send({
        wordsFound: wordList.length,
        wordList: wordList
      });
    });
  });
};