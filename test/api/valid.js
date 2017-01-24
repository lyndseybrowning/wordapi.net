module.exports = function(request, expect, app) {
  describe('GET /api/valid/:word', () => {
    it('should return a 404 status when no word is passed', (done) => {
      request(app)
        .get('/api/valid')
        .expect(404, done);
    });

    it('responds with json', (done) => {
      request(app)
        .get('/api/valid/car')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });

    it('should convert the word to lowercase', (done) => {
        const word = 'EXPERIMENT';

        request(app)
          .get(`/api/valid/${word}`)
          .end((err, res) => {
            if(err) {
              return done(err);
            }

            expect(res.body.word).to.equal(word.toLowerCase());
            done();
          });
    });

    it('returns false when an invalid word is requested', (done) => {
      const invalidWord = 'randomdummyword';

      request(app)
        .get(`/api/valid/${invalidWord}`)
        .end((err, res) => {
          if(err) {
            return done(err);
          }

          expect(res.body).to.deep.equal({
            word: invalidWord,
            valid: false
          });
          done();
        });
    });

    it('returns true when a valid word is requested', (done) => {
      const validWord = 'antidisestablishmentarianism';

      request(app)
        .get(`/api/valid/${validWord}`)
        .end((err, res) => {
          if(err) {
            return done(err);
          }

          expect(res.body).to.deep.equal({
            word: validWord,
            valid: true
          });
          done();
        });
    });
  });
};
