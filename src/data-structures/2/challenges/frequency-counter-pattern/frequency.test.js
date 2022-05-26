import frequency from './frequency';

describe('frequency', () => {
  test.each([
    ['hello', {
      h: 1, e: 1, l: 2, o: 1,
    }],
    ['hello hi', {
      h: 2, e: 1, l: 2, o: 1, i: 1,
    }],
    ['good morning', {
      g: 2, o: 3, d: 1, m: 1, r: 1, n: 2, i: 1,
    }],
    ['Pseudopseudohypoparathyroidism', {
      P: 1,
      s: 3,
      e: 2,
      u: 2,
      d: 3,
      o: 4,
      p: 3,
      h: 2,
      y: 2,
      a: 2,
      r: 2,
      t: 1,
      i: 2,
      m: 1,
    }],
  ])('frequency of %s', (str, expectedFrequency) => {
    expect(frequency(str)).toMatchObject(expectedFrequency);
  });
});
