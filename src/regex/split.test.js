import { describe, test, expect } from '@jest/globals';

describe('regex split', () => {
  test('split with regex', () => {
    expect('a:1;7;9890;b->c;0'.split(/;/g)).toMatchObject([
      'a:1',
      '7',
      '9890',
      'b->c',
      '0',
    ]);
  });
});
