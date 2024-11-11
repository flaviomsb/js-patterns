import { describe, test, expect } from '@jest/globals';
import insertionSort from './insertionSort';

describe('insertionSort', () => {
  test.each([
    [[23, 49, 13, 1, 4, -2], [-2, 1, 4, 13, 23, 49]],
    [[4, 68, 16, 29], [4, 16, 29, 68]],
    [[30, 15, 8, 1, -7], [-7, 1, 8, 15, 30]],
    [[21, 22, -9, 2, 11], [-9, 2, 11, 21, 22]],
  ])('insertion sorting of %s must yield %s', (arr, expectedResult) => {
    expect(insertionSort(arr)).toMatchObject(expectedResult);
  });
});
