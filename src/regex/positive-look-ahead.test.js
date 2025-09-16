import { describe, test, expect } from '@jest/globals';

describe('positive look ahead (?=exp)', () => {
  test.each([
    ['Av!1', true],
    ['abcd', false],
    ['!cA3R', true],
    ['Av&1', false],
  ])('Password %s validates to %s', (password, valid) => {
    expect(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!?^$]).+$/g.test(password),
    ).toBe(valid);
  });
});
