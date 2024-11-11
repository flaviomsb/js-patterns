import { describe, test, expect } from '@jest/globals';
import sameFrequency from './sameFrequency';

describe('sameFrequency', () => {
  test.each([
    [182, 281, true],
    [34, 14, false],
    [3589578, 5879385, true],
    [22, 222, false],
    [322, 532, false],
    [313, 113, false],
    [313, 133, true],
  ])('Checking same frequency between %s and %s', (num1, num2, expectedResult) => {
    expect(sameFrequency(num1, num2)).toBe(expectedResult);
  });
});
