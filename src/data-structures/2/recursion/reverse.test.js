import reverse from './reverse';

describe('reverse', () => {
  test.each([
    ['awesome', 'emosewa'],
    ['flavio', 'oivalf'],
    ['suzy', 'yzus'],
    ['apple', 'elppa'],
  ])('Reverse string of %s is %s', (str, expectedResult) => {
    expect(reverse(str)).toEqual(expectedResult);
  });
});
