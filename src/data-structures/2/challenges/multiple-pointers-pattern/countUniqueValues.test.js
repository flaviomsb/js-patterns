import countUniqueValues from './countUniqueValues';

describe('countUniqueValues', () => {
  test.each([
    [[1, 1, 1, 1, 1, 1, 3], 2],
    [[1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13], 7],
    [[], 0],
    [[-2, -1, -1, 0, 1], 4],
  ])('Checking that unique values count of %s is %s', (arr, expectedCount) => {
    expect(countUniqueValues(arr)).toBe(expectedCount);
  });
});
