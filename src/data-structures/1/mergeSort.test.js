import { describe, test, expect } from '@jest/globals';
import mergeSort, { merge } from './mergeSort';

describe('mergeSort', () => {
  test('sorting', () => {
    const numbers = [32, 5, -1, 22, 15, 53, 13];
    const sortedNumbers = [-1, 5, 13, 15, 22, 32, 53];

    expect(mergeSort(...numbers)).toMatchObject(sortedNumbers);
  });

  test('merge helper function', () => {
    const a = [2, 6, 8, 1];
    const b = [5, 3, 10, 9];

    expect(merge(a, b)).toMatchObject([2, 5, 3, 6, 8, 1, 10, 9]);
  });
});
