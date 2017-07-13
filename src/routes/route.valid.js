module.exports = (app, dictionary) => {
  app.get('/api/valid/:word', (req, res) => {
    const word = req.params.word.toLowerCase();
    const valid = dictionary.hasWord(word);

    res.send({
      word,
      valid,
    });
  });
};
;
