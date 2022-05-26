import areThereDuplicates from './areThereDuplicates';

describe('areThereDuplicates', () => {
  test.each([
    [[1, 2, 2, 3], true],
    [[3, 4, 5, 2], false],
    [['a', 'b', 'z', 'a'], true],
    [[], false],
  ])('Checking for duplicates in %s', (numbers, expectedResult) => {
    expect(areThereDuplicates(...numbers)).toBe(expectedResult);
  });
});
