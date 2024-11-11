import { describe, test, expect } from '@jest/globals';
import reverseInteger from './reverseInteger';

describe('Integer reversal', () => {
  test.each([
    [1000, 1],
    [1005, 5001],
    [2, 2],
    [789, 987],
    [125689, 986521],
    [-23, -32],
  ])('Reverse of %s is %s', (num, expectedResult) => {
    expect(reverseInteger(num)).toEqual(expectedResult);
  });
});
