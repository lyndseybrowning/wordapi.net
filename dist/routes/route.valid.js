'use strict';

module.exports = function (app, dictionary) {
  app.get('/api/valid/:word', function (req, res) {
    var word = req.params.word.toLowerCase();
    var valid = dictionary.hasWord(word);

    res.send({
      word: word,
      valid: valid
    });
  });
};
;