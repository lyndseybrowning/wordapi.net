import { expect } from 'chai';
import errorHandler from '../../src/middleware/errorHandler';

describe('Error handler', () => {
  const err = {
    message: 'This is an error',
    stack: 'stack details',
    status: 404
  };

  const res = {
    status(result) {
      expect(result).to.equal(err.status);
      return this;
    },

    send(handler) {
      expect(handler).to.be.a('object');
      return this;
    }
  };

  const actual = errorHandler(err, {}, res, null);
});
