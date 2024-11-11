import { describe, test, expect } from '@jest/globals';
import minSubarrayLen from './minSubarrayLen';

describe('minSubarrayLen', () => {
  test.each([
    [[2, 3, 1, 2, 4, 3], 7, 2],
    [[2, 1, 6, 5, 4], 9, 2],
    [[3, 1, 7, 11, 2, 9, 62], 52, 1],
    [[1, 4, 16, 22, 5, 7, 8, 9, 10], 39, 3],
    [[1, 4, 16, 22, 5, 7, 8, 9, 10], 55, 5],
    [[4, 3, 3, 8, 1, 2, 3], 11, 2],
    [[1, 4, 16, 22, 5, 7, 8, 9, 10], 95, 0],
  ])('Min length of subarray from %s which sum is greater or equal to %s', (values, ref, expectedResult) => {
    expect(minSubarrayLen(values, ref)).toBe(expectedResult);
  });
});
