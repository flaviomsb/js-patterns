import { describe, test, expect } from '@jest/globals';
import sumZero from './sumZero';

describe('sumZero', () => {
  test.each([
    [
      [-3, -2, -1, 0, 1, 2, 3],
      [-3, 3],
    ],
    [[-2, 0, 1, 3], []],
    [[1, 2, 3], []],
    [
      [-5, -1, 0, 2, 5],
      [-5, 5],
    ],
  ])('Sum zero of %s must be %s', (arr, expectedResult) => {
    expect(sumZero(arr)).toMatchObject(expectedResult);
  });
});
