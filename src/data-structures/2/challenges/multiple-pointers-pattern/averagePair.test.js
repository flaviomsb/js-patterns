import averagePair from './averagePair';

describe('averagePair', () => {
  test.each([
    [2.5, [1, 2, 3], true],
    [8, [1, 3, 3, 5, 6, 7, 10, 12, 19], true],
    [4.1, [-1, 0, 3, 4, 5, 6], false],
    [4.5, [], false],
  ])('Checking if target average %s exists in %s', (target, values, expectedResult) => {
    expect(averagePair(values, target)).toBe(expectedResult);
  });
});
