import { describe, test, expect } from '@jest/globals';

describe('regex test', () => {
  test('test if value is an integer', () => {
    expect(/^\d+$/.test('124212')).toBeTruthy();
    expect(/^\d+$/.test('124212a')).toBeFalsy();
  });
});
