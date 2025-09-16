import { describe, it, expect } from '@jest/globals';

describe('comparison', () => {
  it('must be true when "0" == 0', () => {
    // @ts-expect-error testing how js handles equality 
    expect('0' == 0).toBe(true);
  });

  it('must be false when "0" != 0', () => {
    // @ts-expect-error testing how js handles equality 
    expect('0' != 0).toBe(false);
  });

  it('must be true when "0" !== 0 because string !== integer', () => {
    // @ts-expect-error testing how js handles equality 
    expect('0' !== 0).toBe(true);
  });

  it('must be false when "0" === 0', () => {
    // @ts-expect-error testing how js handles equality 
    expect('0' === 0).toBe(false);
  });

  it('must be true when "" == 0 because "" is converted to 0', () => {
    // @ts-expect-error testing how js handles equality 
    expect('' == 0).toBe(true);
  });
});
