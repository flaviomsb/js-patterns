import { describe, test, expect } from '@jest/globals';
import capitalizeFirst from './capitalizeFirst';

describe('capitalizeFirst', () => {
  test.each([
    [['john', 'lucy', 'selma'], ['John', 'Lucy', 'Selma']],
    [['blue', 'red', 'yellow'], ['Blue', 'Red', 'Yellow']],
    [['europe', 'asia', 'america'], ['Europe', 'Asia', 'America']],
    [['plane', 'lima', 'zulu'], ['Plane', 'Lima', 'Zulu']],
  ])('Capitalize first letter of %s', (arr, expectedResult) => {
    expect(capitalizeFirst(arr)).toMatchObject(expectedResult);
  });
});
