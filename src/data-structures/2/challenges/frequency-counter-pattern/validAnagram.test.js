import { describe, test, expect } from '@jest/globals';
import validAnagram from './validAnagram';

describe('validAnagram', () => {
  test.each([
    ['', '', true],
    ['aaz', 'zza', false],
    ['anagram', 'nagaram', true],
    ['rat', 'car', false],
    ['awesome', 'awesom', false],
    ['qwerty', 'qeywrt', true],
    ['texttwisttime', 'timetwisttext', true],
  ])('Checking anagram between %s and %s', (str1, str2, expected) => {
    expect(validAnagram(str1, str2)).toBe(expected);
  });
});
