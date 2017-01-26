module.exports = function(request, expect, app) {
  describe('GET /api/list', () => {
      it('should send a 500 status when no required params are passed', (done) => {
        request(app)
          .get('/api/list?dummy=1')
          .expect(500, done);
      });

      it('should respond with json', (done) => {
        request(app)
          .get('/api/list?length=4')
          .expect('Content-Type', /json/)
          .expect(200, done);
      });

      it('should return a word list and the number of words found', (done) => {
        request(app)
          .get('/api/list?length=4')
          .expect(200)
          .end((err, res) => {
            if(err) {
              throw(err);
            }

            expect(res.body).to.have.keys(['wordList', 'wordsFound']);
            done();
          });
      });

      it('should return the words found in array format', (done) => {
        request(app)
          .get('/api/list?length=4&prefix=tree')
          .expect(200)
          .end((err, res) => {
            if(err) {
              throw(err);
            }
            expect(res.body.wordList).to.be.a('array');
            done();
          });
      });
  });
}
