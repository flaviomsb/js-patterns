import { describe, test, expect } from '@jest/globals';
import { pairsCounter } from '../pairsCounter';

describe('pairsCounter', () => {
  test('is a function', () => {
    expect(typeof pairsCounter).toBe('function');
  });

  test.each([
    [[1, 2, 3, 1, 1, 3], 4],
    [[1, 1, 1, 1], 6],
    [[1, 2, 3], 0],
    [[], 0],
  ])('%s should have %s pairs', (nums: number[], expectedPairsCount: number) => {
    expect(pairsCounter(nums)).toEqual(expectedPairsCount);
  });
});
