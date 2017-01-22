import request from 'supertest';
import server from '../src/server.js';

const app = server.init();

describe('GET /api/valid/:word', () => {
  it('responds with json', (done) => {
    request(app)
      .get('/api/valid/word')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});
