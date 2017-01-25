module.exports = function(request, expect, app) {
  describe('invalid API route requested', () => {
    it('should return a 404 status when an invalid route is requested', (done) => {
      request(app)
        .get('/api/random/')
        .expect('Content-Type', /json/)
        .expect(404, done);
    });
  });
}
