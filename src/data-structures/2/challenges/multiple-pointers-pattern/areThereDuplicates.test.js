import { describe, test, expect } from '@jest/globals';
import areThereDuplicates from './areThereDuplicates';

describe('areThereDuplicates', () => {
  test.each([
    [[1, 2, 2, 3], true],
    [[3, 4, 5, 2], false],
    [[13, 24, 75, 24, 5, 8], true],
    [[], false],
  ])('Checking for duplicates in %s', (values, expectedResult) => {
    expect(areThereDuplicates(...values)).toBe(expectedResult);
  });
});
