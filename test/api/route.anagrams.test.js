module.exports = function(request, expect, app) {
    describe('GET /api/anagrams/generate/', () => {
        const generateApi = '/api/anagrams/generate';

        it('should send a 404 status when no word is passed', (done) => {
        request(app)
            .get(generateApi)
            .expect(404, done);
        });

        it('should respond with JSON', (done) => {
        request(app)
            .get(`${generateApi}/hello`)
            .expect('Content-Type', /json/)
            .expect(200, done);
        });

        it('should return correct properties', (done) => {
        request(app)
            .get(`${generateApi}/hello`)
            .expect(200)
            .end((err, res) => {
            if (err) {
                throw(err);
            }

            expect(res.body).to.have.keys(['word', 'count', 'anagrams']);
            done();
            });
        });
    });

    describe('GET /api/anagrams/generate/length/', () => {
        const lengthApi = '/api/anagrams/generate/length'; 

        it('should respond with JSON', (done) => {
            request(app)
              .get(`${lengthApi}/2`)
              .expect('Content-Type', /json/)
              .expect(200, done);
        });

        it('should return correct properties', (done) => {
          request(app)
            .get(`${lengthApi}/2`)
            .expect(200)
            .end((err, res) => {
              if(err) {
                  throw(err);
              }

              expect(res.body).to.have.keys(['length', 'count', 'anagrams']);
              done();
            });
        });
    });

    describe('GET /api/anagrams/solve/', () => {
        const solveApi = '/api/anagrams/solve'; 

        it('Returns a 400 when the body has no parameters', (done) => {
          request(app)
            .post(`${solveApi}`, {})
            .expect(400, done);
        });

        it('should respond with JSON', (done) => {
          request(app)
            .post(`${solveApi}`)
            .send(['car'])
            .expect('Content-Type', /json/)
            .expect(200, done);
        });

        it('should return each item in the request body with an array of anagrams', (done) => {
          request(app)
            .post(`${solveApi}`)
            .send(['rca'])
            .expect(200)
            .end((err, res) => {
              if (err) {
                  throw(err);
              }

              expect(res.body).to.have.keys(['rca']);
              done();
            });
        });
    });
};
