import { describe, test, expect } from '@jest/globals';
import minIncrementForUnique from '../minIncrementForUnique';

describe('minIncrementForUnique', () => {
  test.each([
    [[4, 3, 2, 2, 1, 4], 5],
    [[5, 5, 5, 5, 5], 10],
    [[1, 1, 1, 1, 2], 9],
  ])(
    'minimum number of moves to make %s a unique items array should be %s',
    (nums: number[], expectedNumOfMoves: number) => {
      expect(minIncrementForUnique(nums)).toBe(expectedNumOfMoves);
    },
  );
});
