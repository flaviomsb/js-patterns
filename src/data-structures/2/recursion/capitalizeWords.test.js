import { describe, test, expect } from '@jest/globals';
import capitalizeWords from './capitalizeWords';

describe('capitalizeWords', () => {
  test.each([
    [['john', 'lucy', 'selma'], ['JOHN', 'LUCY', 'SELMA']],
    [['blue', 'red', 'yellow'], ['BLUE', 'RED', 'YELLOW']],
    [['europe', 'asia', 'america'], ['EUROPE', 'ASIA', 'AMERICA']],
    [['plane', 'lima', 'zulu'], ['PLANE', 'LIMA', 'ZULU']],
  ])('Capitalize words of %s', (arr, expectedResult) => {
    expect(capitalizeWords(arr)).toMatchObject(expectedResult);
  });
});
