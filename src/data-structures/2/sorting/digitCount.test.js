import { describe, test, expect } from '@jest/globals';
import digitCount from './digitCount';

describe('digitCount', () => {
  test.each([
    [9874, 4],
    [0, 1],
    [325, 3],
    [21, 2],
    [1500, 4],
  ])('digit count of %s should be %s', (num, expectedResult) => {
    expect(digitCount(num)).toBe(expectedResult);
  });
});
