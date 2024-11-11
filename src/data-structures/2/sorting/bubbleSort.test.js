import { describe, test, expect } from '@jest/globals';
import bubbleSort from './bubbleSort';

describe('bubbleSort', () => {
  test.each([
    [[12, 29, 3, 14], [3, 12, 14, 29]],
    [[4, 68, 16, 29], [4, 16, 29, 68]],
    [[40, 16, 2, 1, -43], [-43, 1, 2, 16, 40]],
    [[14, 22, -4, 5, 10], [-4, 5, 10, 14, 22]],
  ])('bubble sorting of %s must yield %s', (arr, expectedResult) => {
    expect(bubbleSort(arr)).toMatchObject(expectedResult);
  });
});
