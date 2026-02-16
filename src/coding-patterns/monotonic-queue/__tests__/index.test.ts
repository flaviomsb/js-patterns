import { describe, test, expect } from '@jest/globals';
import createMonotonicIncreasingQueue from '../createMonotonicIncreasingQueue';

describe('createMonotonicIncreasingQueue', () => {
  test('createMonotonicIncreasingQueue is a function', () => {
    expect(typeof createMonotonicIncreasingQueue).toEqual('function');
  });

  test.each([
    [
      [4, 8],
      [7, 5, 6, 4, 8],
    ],
    [
      [2, 7, 12],
      [9, 3, 2, 8, 7, 12],
    ],
    [
      [3, 8, 12],
      [3, 21, 8, 15, 12],
    ],
  ])(
    'should create queue %s from numbers list %s',
    (expectedQueue: number[], nums: number[]) => {
      expect(createMonotonicIncreasingQueue(nums)).toEqual(expectedQueue);
    },
  );
});
