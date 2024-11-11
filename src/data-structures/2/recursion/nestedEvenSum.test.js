import { describe, test, expect } from '@jest/globals';
import nestedEvenSum from './nestedEvenSum';

describe('nestedEvenSum', () => {
  test('sum of even numbers of obj1', () => {
    const obj1 = {
      a: 2,
      b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
      c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
      d: 1,
      e: { e: { e: 2 }, ee: 'car' },
    };

    expect(nestedEvenSum(obj1)).toBe(10);
  });
});
