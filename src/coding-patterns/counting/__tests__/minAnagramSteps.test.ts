import { describe, test, expect } from '@jest/globals';
import { minAnagramSteps } from '../minAnagramSteps';

describe('minAnagramSteps', () => {
  test.each([
    ['def', 'abc', 3],
    ['silent', 'listen', 0],
    ['tlabio', 'flavio', 2],
    ['aabbcd', 'aabbcc', 1],
  ])(
    'should make %s an anagram of %s in a minimum number of %s steps',
    (second, first, numOfSteps) => {
      expect(minAnagramSteps(first, second)).toBe(numOfSteps);
    },
  );
});
