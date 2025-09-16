import { describe, test, expect } from '@jest/globals';
import binarySearch from './binarySearch';

describe('binarySearch', () => {
  test.each([
    [15, [1, 2, 3, 6, 7, 12, 15, 19], 6],
    [33, [2, 3, 10, 20, 32, 33, 45, 50], 5],
    [2, [2, 3, 7, 9], 0],
  ])(
    'Binary search of %s in array %s must return index of %s',
    (val, arr, expectedResult) => {
      expect(binarySearch(arr, val)).toEqual(expectedResult);
    },
  );
});
