import { describe, test, expect } from '@jest/globals';
import maxChar from './maxChar';

describe('Max char', () => {
  test.each([
    ['abcccccccd', 'c'],
    ['apple 123111111', '1'],
  ])('Max char from %s is %s', (str, expectedResult) => {
    expect(maxChar(str)).toEqual(expectedResult);
  });
});
