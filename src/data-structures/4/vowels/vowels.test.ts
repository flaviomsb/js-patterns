import vowels, { vowelsRegex } from './vowels';

describe('vowels', () => {
  test.each([
    ['John', 1],
    ['Olivia', 4],
    ['Mike', 2],
    ['Mariana', 4],
  ])('vowels count of %s is %s', (str, expectedResult) => {
    expect(vowels(str)).toEqual(expectedResult);
    expect(vowelsRegex(str)).toEqual(expectedResult);
  });
});
