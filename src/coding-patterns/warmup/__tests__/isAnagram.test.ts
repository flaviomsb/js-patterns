import { describe, test, expect } from '@jest/globals';
import isAnagram from '../isAnagram';

describe('isAnagram', () => {
  test('isAnagram is a function', () => {
    expect(typeof isAnagram).toEqual('function');
  });

  test.each([
    ['hello', 'llohe', true],
    ['Whoa! Hi!', 'Hi! Whoa!', true],
    ['One One', 'Two two two', false],
    ['One one', 'One one c', false],
    ['aabbcc', 'aabbbc', false],
    ['A tree, a life, a bench', 'A tree, a fence, a yard', false],
  ])(
    'check %s and %s with isAnagram returns %s',
    (str1, str2, expected) => {
      expect(isAnagram(str1, str2)).toBe(expected);
    },
  );
});
