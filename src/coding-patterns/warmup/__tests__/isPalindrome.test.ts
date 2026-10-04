import { describe, test, expect } from '@jest/globals';
import isPalindrome from '../isPalindrome';

describe('isPalindrome', () => {
  test.each([
    ['a', true],
    ['', true],
    ['racecar', true],
    ['kayak', true],
    ['noon', true],
    ['Radar', true],
    ['12345', false],
    ['A man, a plan, a canal, Panama!', true],
    ['Was it a car or a cat I saw?', true],
    ['javascript', false],
    ['palindrome', false],
  ])(
    'should check if "%s" is a palindrome and return %s',
    (input, expectedResult) => {
      expect(isPalindrome(input)).toBe(expectedResult);
    },
  );
});
