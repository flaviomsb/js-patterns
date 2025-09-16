import { describe, test, expect } from '@jest/globals';
import fibonacci, { iterativeFibonacci, recursiveFibonacci } from './fibonacci';

describe('fibonacci', () => {
  const numbers = [
    [4, 3],
    [10, 55],
    [28, 317811],
    [35, 9227465],
  ];

  [iterativeFibonacci, fibonacci, recursiveFibonacci].forEach((fn) => {
    describe(`${fn.name}`, () => {
      test.each(numbers)('Fibonacci value of %s is %s', (num, expectedResult) => {
        expect(fn(num)).toEqual(expectedResult);
      });
    });
  });
});
