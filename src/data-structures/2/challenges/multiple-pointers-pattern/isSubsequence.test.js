import isSubsequence from './isSubsequence';

describe('isSubsequence', () => {
  test.each([
    ['hello', 'hello word', true],
    ['sing', 'sting', true],
    ['abc', 'abracadabra', true],
    ['abc', 'acb', false],
  ])('Checking if %s is a subsequence of %s', (str1, str2, expectedResult) => {
    expect(isSubsequence(str1, str2)).toBe(expectedResult);
  });
});
