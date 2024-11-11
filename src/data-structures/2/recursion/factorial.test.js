import { describe, test, expect } from '@jest/globals';
import factorial from './factorial';

describe('factorial', () => {
  test.each([
    [0, 1],
    [2, 2],
    [3, 6],
    [7, 5040],
    [9, 362880],
  ])('factorial of the base %s is %s', (num, expectedResult) => {
    expect(factorial(num)).toEqual(expectedResult);
  });
});
