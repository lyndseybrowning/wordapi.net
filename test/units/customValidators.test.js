import { expect } from 'chai';
import validators from '../../src/middleware/customValidators';

describe('Custom Validators', () => {

  describe('At least one required', () => {
    it('returns false when all parameters are undefined', () => {
      const actual = validators.atLeastOneRequired();
      const expected = false;

      expect(actual).to.equal(expected);
    });

    it('returns true when at least one parameter is not undefined', () => {
      const actual = validators.atLeastOneRequired('one', undefined);
      const expected = true;

      expect(actual).to.equal(expected);
    });
  });
});
