import getDigit from './getDigit';

describe('getDigit', () => {
  test.each([
    [1089, 1, 8],
    [1089, 0, 9],
    [1089, 2, 0],
    [1089, 3, 1],
    [324, 2, 3],
    [98, 1, 9],
  ])('digit %s at place %s should be %s', (num, place, expectedResult) => {
    expect(getDigit(num, place)).toBe(expectedResult);
  });
});
