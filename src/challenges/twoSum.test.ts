import { describe, test, expect } from '@jest/globals';
import { twoSum } from './twoSum';

describe('twoSum', () => {
  test.each([
    [[2, 7, 11, 15], 9, [0, 1]],
    [[3, 2, 4], 6, [1, 2]],
    [[3, 3], 6, [0, 1]],
    [[2, 3, 6], 4, []],
  ])(
    'should find the indexes in array %s that sum %s',
    (nums, target, output) => {
      expect(twoSum(nums, target)).toEqual(output);
    },
  );
});
