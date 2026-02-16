import { describe, test, expect } from '@jest/globals';
import {
  createMonotonicIncreasingQueue,
  createMonotonicDecreasingQueue,
} from '..';

describe('monotonic-queue', () => {
  test('module export functions', () => {
    expect(typeof createMonotonicIncreasingQueue).toEqual('function');
    expect(typeof createMonotonicDecreasingQueue).toEqual('function');
  });

  describe('createMonotonicIncreasingQueue', () => {
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
      'should create an increasing queue %s from numbers list %s',
      (expectedQueue: number[], nums: number[]) => {
        expect(createMonotonicIncreasingQueue(nums)).toEqual(expectedQueue);
      },
    );
  });

  describe('createMonotonicDecreasingQueue', () => {
    test.each([
      [
        [8],
        [7, 5, 6, 4, 8],
      ],
      [
        [12, 10],
        [9, 3, 12, 8, 7, 10],
      ],
      [
        [31, 19, 5],
        [31, 8, 1, 19, 5],
      ],
    ])(
      'should create a decreasing queue %s from numbers list %s',
      (expectedQueue: number[], nums: number[]) => {
        expect(createMonotonicDecreasingQueue(nums)).toEqual(expectedQueue);
      },
    );
  });
});
