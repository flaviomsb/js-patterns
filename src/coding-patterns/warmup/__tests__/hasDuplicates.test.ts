import { describe, test, expect } from '@jest/globals';
import hasDuplicates from '../hasDuplicates';

describe('hasDuplicates', () => {
  test.each([
    [[], false],
    [[5], false],
    [[3, 3], true],
    [[1, 2, 3, 4], false],
    [[1, 2, 3, 1], true],
    [[3, 2, 6, -1, 2, 1], true],
  ])('%s should return %s for duplicates', (numbers, expectedDuplicates) => {
    expect(hasDuplicates(numbers)).toBe(expectedDuplicates);
  });
});

