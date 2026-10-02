import { describe, test, expect } from '@jest/globals';
import { reverseVowelsFunctional, reverseVowels } from '../reverseVowels';

describe('Reverse wowels chanllenge', () => {
  test('reverseVowelsFunctional is a function', () => {
    expect(typeof reverseVowelsFunctional).toBe('function');
    expect(typeof reverseVowels).toBe('function');
  });

  describe('reverseVowelsFunctional', () => {
    test.each([
      [null, ''],
      ['', ''],
      ['hello', 'holle'],
      ['AEIOU', 'UOIEA'],
      ['Mariana', 'Maraina'],
    ])('%s should return %s with reversed vowels', (str, expectedResult) => {
      // @ts-expect-error need to check a null sentence
      expect(reverseVowelsFunctional(str)).toBe(expectedResult);
    });
  });

  describe('reverseVowels', () => {
    test.each([
      ['hello', 'holle'],
      ['AEIOU', 'UOIEA'],
      ['Mariana', 'Maraina'],
      ['John', 'John'],
    ])('%s should return %s with reversed vowels', (str, expectedResult) => {
      expect(reverseVowels(str)).toBe(expectedResult);
    });
  });
});
