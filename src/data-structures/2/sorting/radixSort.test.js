import { describe, test, expect } from '@jest/globals';
import radixSort from './radixSort';

describe('radixSort', () => {
  test.each([
    [
      [5, 330, 2345, 12, 231],
      [5, 12, 231, 330, 2345],
    ],
    [
      [55, 230, 45, 2, 1],
      [1, 2, 45, 55, 230],
    ],
    [
      [234, 43, 78893, 32, 1, 5],
      [1, 5, 32, 43, 234, 78893],
    ],
    [
      [24, 34, 12, 7, 9, 3200, 45067],
      [7, 9, 12, 24, 34, 3200, 45067],
    ],
  ])('radix sorting of %s must yield %s', (arr, expectedResult) => {
    expect(radixSort(arr)).toMatchObject(expectedResult);
  });
});
