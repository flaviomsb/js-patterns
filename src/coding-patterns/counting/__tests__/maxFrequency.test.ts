import { describe, test, expect } from '@jest/globals';
import maxFrequency from './maxFrequency';

describe('maxFrequency', () => {
  test.each([
    [[3, 2, 2, 3, 1, 4], 4],
    [[5, 5, 5, 2, 2, 3], 3],
    [[7, 8, 8, 7, 9, 9], 6],
  ])(
    'max frequency of %s should be %s',
    (nums: number[], expectedMaxFrequency: number) => {
      expect(maxFrequency(nums)).toBe(expectedMaxFrequency);
    },
  );
});
