'use strict';

var _utils = require('../utils');

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (app, dictionary) {
  var wordList = dictionary.getWords(false);

  app.get('/api/anagrams/generate/:word', function (req, res) {
    var word = req.params.word.toLowerCase();
    var anagrams = dictionary.getAnagrams(word);
    var count = anagrams.length;

    res.json({
      word: word,
      count: count,
      anagrams: anagrams
    });
  });

  app.get('/api/anagrams/generate/length/:length', function (req, res) {
    var length = parseInt(req.params.length, 10);
    var words = _utils2.default.filterByLength(wordList, length);
    var anagrams = _utils2.default.randomiseList(words);
    var count = anagrams.length;

    res.json({
      length: length,
      count: count,
      anagrams: anagrams
    });
  });

  app.post('/api/anagrams/solve', function (req, res) {
    if (Object.keys(req.body).length === 0) {
      return res.status(400).send({
        url: req.url,
        errors: 'Expected array with at least one value, none was found'
      });
    }

    var anagrams = req.body.reduce(function (items, item) {
      items[item] = dictionary.getAnagrams(item);
      return items;
    }, {});

    res.json(anagrams);
  });
};