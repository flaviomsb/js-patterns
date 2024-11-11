import { describe, test, expect } from '@jest/globals';
import someRecursive from './someRecursive';

const isOdd = (val) => val % 2 !== 0;
const greaterThanFive = (val) => val > 5;

describe('someRecursive', () => {
  test.each([
    [[1, 2, 3, 4], isOdd, true],
    [[4, 6, 8, 9], isOdd, true],
    [[4, 6, 2], greaterThanFive, true],
    [[1, 2, 4], greaterThanFive, false],
    [[], isOdd, false],
    [[1], isOdd, true],
  ])('Checking %s with callback %s', (arr, callback, expectedResult) => {
    expect(someRecursive(arr, callback)).toBe(expectedResult);
  });
});
