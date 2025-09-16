import { describe, test, expect } from '@jest/globals';
import power from './power';

describe('power', () => {
  test.each([
    [2, 0, 1],
    [2, 2, 4],
    [2, 3, 8],
    [2, 4, 16],
    [5, 3, 125],
  ])(
    'power of the base %s to the exponent %s must be %s',
    (base, exp, expectedResult) => {
      expect(power(base, exp)).toEqual(expectedResult);
    },
  );
});
