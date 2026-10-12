import { describe, test, expect } from '@jest/globals';
import shortestDistance from '../shortestDistance';

describe('shortestDistance', () => {
  test.each([
    [['a', 'b'], '', '', 0],
    [['a', 'b'], 'a', '', 0],
    [['a', 'b'], '', 'b', 0],
    [['a', 'b', 'c'], 'a', 'a', 0],
    [
      ['the', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog'],
      'fox',
      'dog',
      5,
    ],
    [['a', 'b', 'c', 'd', 'a', 'b'], 'a', 'b', 1],
    [['a', 'c', 'd', 'b', 'a'], 'a', 'b', 1],
    [
      ['repeated', 'words', 'in', 'the', 'array', 'words'],
      'repeated',
      'words',
      1,
    ],
  ])(
    'the shortest distance in %s between %s and %s should be %s',
    (words, w1, w2, expectedResult) => {
      expect(shortestDistance(words, w1, w2)).toBe(expectedResult);
    },
  );
});
