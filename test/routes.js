import request from 'supertest';
import { expect } from 'chai';
import app from '../src/index';

describe('GET /api/valid/:word', () => {
  it('responds with json', (done) => {
    request(app)
      .get('/api/valid/car')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        if(err) {
          return done(err);
        }
        expect(res.body).to.deep.equal({
          word: 'car',
          valid: true
        });
        done();
      });
    }
  );
});
