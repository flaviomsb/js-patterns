import { describe, test, expect } from '@jest/globals';
import isPangram from '../isPangram';

describe('isPangram', () => {
  test.each([
    [null, false],
    ['', false],
    ['TheQuickBrownFoxJumpsOverTheLazyDog', true],
    ["abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ", true],
    ["This is not a pangram", false],
    ["abcdefghijklmnopqrstuvwxy1", false],
  ])('%s should return %s for pangram check', (sentence, expectedResult) => {
    // @ts-expect-error need to check a null sentence
    expect(isPangram(sentence)).toBe(expectedResult);
  });
});

