import { describe, test, expect } from '@jest/globals';
import spiralMatrix from './spiralMatrix';

describe('Spiral matrix', () => {
  test('spiralMatrix is a function', () => {
    expect(typeof spiralMatrix).toEqual('function');
  });

  test('spiralMatrix produces a 2x2 array', () => {
    const m = spiralMatrix(2);
    expect(m.length).toEqual(2);
    expect(m[0]).toEqual([1, 2]);
    expect(m[1]).toEqual([4, 3]);
  });

  test('spiralMatrix produces a 3x3 array', () => {
    const m = spiralMatrix(3);
    expect(m.length).toEqual(3);
    expect(m[0]).toEqual([1, 2, 3]);
    expect(m[1]).toEqual([8, 9, 4]);
    expect(m[2]).toEqual([7, 6, 5]);
  });

  test('spiralMatrix produces a 4x4 array', () => {
    const m = spiralMatrix(4);
    expect(m.length).toEqual(4);
    expect(m[0]).toEqual([1, 2, 3, 4]);
    expect(m[1]).toEqual([12, 13, 14, 5]);
    expect(m[2]).toEqual([11, 16, 15, 6]);
    expect(m[3]).toEqual([10, 9, 8, 7]);
  });
});
