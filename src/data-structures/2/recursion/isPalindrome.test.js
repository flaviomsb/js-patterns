import isPalindrome from './isPalindrome';

describe('isPalindrome', () => {
  test.each([
    ['awesome', false],
    ['foobar', false],
    ['tacocat', true],
    ['amanaplanacanalpanama', true],
    ['a', true],
    ['ac', false],
    ['bb', true],
  ])('Palindrome of %s is %s', (str, expectedResult) => {
    expect(isPalindrome(str)).toBe(expectedResult);
  });
});
