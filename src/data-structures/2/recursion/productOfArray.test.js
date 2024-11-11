import { describe, test, expect } from '@jest/globals';
import productOfArray from './productOfArray';

describe('productOfArray', () => {
  test.each([
    [[1, 2, 3], 6],
    [[2, 3, 10], 60],
    [[3, 2, 7, 9], 378],
  ])('Product of array %s is %s', (arr, expectedResult) => {
    expect(productOfArray(arr)).toEqual(expectedResult);
  });
});
