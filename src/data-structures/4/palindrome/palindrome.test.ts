import { describe, test, expect } from '@jest/globals';
import palindrome from './palindrome';

describe('Palindrome', () => {
  test.each([
    ['abba', true],
    ['caac', true],
    ['10002', false],
    ['John', false],
    ['Mayam', false],
    [undefined, false],
    [null, false],
    ['', true],
  ])(
    'Testing if %s is a palindrome',
    (str: string | null | undefined, expectedResult) => {
      expect(palindrome(str)).toEqual(expectedResult);
    },
  );
});
