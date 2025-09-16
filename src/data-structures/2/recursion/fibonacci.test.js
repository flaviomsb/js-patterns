import { describe, test, expect } from '@jest/globals';
import fibonacci from './fibonacci';

describe('Fibonacci function', () => {
  test.each([
    [4, 3],
    [10, 55],
    [28, 317811],
    [35, 9227465],
  ])('fibonacci value of %s must be %s', (num, expectedResult) => {
    expect(fibonacci(num)).toEqual(expectedResult);
  });
});
