import { expect } from 'chai';
import errorHandler from '../../src/middleware/errorHandler';
import config from '../../src/config';

describe('Error handler development', () => {
  const err = {
    message: 'This is an error',
    stack: 'stack details'
  };

  const res = {
    status(result) {
      expect(result).to.equal(500);
      return this;
    },

    send(handler) {
      expect(handler).to.be.a('object');
      expect(handler.error).to.equal('stack details');
      return this;
    }
  };

  const actual = errorHandler(err, {}, res, null);
});

describe('Error handler live', () => {
  const err = {
    message: 'This is an error',
    stack: 'stack details should not be shown',
    status: 404
  };

  const res = {
    status(result) {
      expect(result).to.equal(err.status);
      return this;
    },

    send(handler) {
      expect(handler).to.be.a('object');
      expect(handler.error).to.be.empty;
      return this;
    }
  };

  errorHandler(err, {}, res, null, 'production');
});
