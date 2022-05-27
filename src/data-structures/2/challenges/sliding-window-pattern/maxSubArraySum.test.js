import maxSubArraySum from './maxSubArraySum';

describe('maxSubArraySum', () => {
  test.each([
    [[100, 200, 300, 400], 2, 700],
    [[1, 4, 2, 10, 23, 3, 1, 0, 20], 4, 39],
    [[-3, 4, 0, -2, 6, -1], 2, 5],
    [[3, -2, 7, -4, 1, -1, 4, -2, 1], 2, 5],
    [[2, 3], 3, null],
  ])('Max sum of %s for length %s', (values, length, expectedResult) => {
    expect(maxSubArraySum(values, length)).toBe(expectedResult);
  });
});
