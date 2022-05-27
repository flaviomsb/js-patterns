import recursiveRange from './recursiveRange';

describe('recursiveRange', () => {
  test.each([
    [6, 21],
    [10, 55],
    [11, 66],
  ])('Range sum of %s is %s', (num, expectedResult) => {
    expect(recursiveRange(num)).toEqual(expectedResult);
  });
});
