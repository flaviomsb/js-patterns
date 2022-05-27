import fibonacci from './fibonacci';

describe('fibonacci', () => {
  test.each([
    [4, 3],
    [10, 55],
    [28, 317811],
    [35, 9227465],
  ])('Fibonacci value of %s is %s', (num, expectedResult) => {
    expect(fibonacci(num)).toEqual(expectedResult);
  });
});
