import mostDigits from './mostDigits';

describe('mostDigits', () => {
  test.each([
    [[123, 34324, 4, 23], 5],
    [[23, 154, 104323], 6],
    [[54, 23, 1, -2], 2],
    [[150, 789, 10, 3], 3],
  ])('most digits of %s should be %s', (num, expectedResult) => {
    expect(mostDigits(num)).toBe(expectedResult);
  });
});
