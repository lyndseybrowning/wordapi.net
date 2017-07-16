import utils from '../utils';

module.exports = (app, dictionary) => {
  const wordList = dictionary.getWords(false);

  app.get('/api/anagrams/generate/:word', (req, res) => {
    const word = req.params.word.toLowerCase();
    const anagrams = dictionary.getAnagrams(word);
    const count = anagrams.length;

    res.json({
        word,
        count,
        anagrams,
    });
  });

  app.get('/api/anagrams/generate/length/:length', (req, res) => {
    const length = parseInt(req.params.length, 10);
    const words = utils.filterByLength(wordList, length);
    const anagrams = utils.randomiseList(words);
    const count = anagrams.length;

    res.json({
        length,
        count,
        anagrams,
    });
  });

  app.post('/api/anagrams/solve/:body', (req, res) => {
    res.json({
        rca: ['arc', 'car'],
    });
  });
};
