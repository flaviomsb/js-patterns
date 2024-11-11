import { describe, test, expect } from '@jest/globals';
import Stats from './Stats';

describe('Iterator pattern', () => {
  test('stats', () => {
    const expectedResults = {
      avg: 4.4,
      max: 6,
      min: 2,
    };

    const stats = new Stats(4, 5, 5, 2, 6);

    for (const s of stats) {
      const [stat, value] = Object.entries(s);
      expect(value).toEqual(expectedResults[stat]);
    }
  });
});
