import { describe, test, expect } from '@jest/globals';
import merge from './merge';

describe('merge', () => {
  test.each([
    [[3, 12, 14, 29], [0, 1, 10, 45], [0, 1, 3, 10, 12, 14, 29, 45]],
    [[-4, 5, 10, 14, 22], [5, 12, 22, 89], [-4, 5, 5, 10, 12, 14, 22, 22, 89]],
    [[24], [10], [10, 24]],
  ])('merging %s and %s must yield %s', (arr1, arr2, expectedResult) => {
    expect(merge(arr1, arr2)).toMatchObject(expectedResult);
  });
});
