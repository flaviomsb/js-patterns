import { describe, test, expect } from '@jest/globals';
/**
 * In this exercise, you need to look for a currency symbol followed by digits and wrap them in ***.
 *
 * input:
 *
 * movie ticket: $15, popcorn: $8
 * movie ticket: €15, popcorn: €8
 * movie ticket: ₹15, popcorn: ₹8
 * output:
 *
 * movie ticket: ***$15***, popcorn: ***$8***
 * movie ticket: ***€15***, popcorn: ***€8***
 * movie ticket: ***₹15***, popcorn: ***₹8***
 */
describe('Currency symbol exercise', () => {
  test.each([
    [
      '$',
      'movie ticket: $15, popcorn: $8',
      'movie ticket: ***$15***, popcorn: ***$8***',
    ],
    [
      '€',
      'movie ticket: €15, popcorn: €8',
      'movie ticket: ***€15***, popcorn: ***€8***',
    ],
    [
      '₹',
      'movie ticket: ₹15, popcorn: ₹8',
      'movie ticket: ***₹15***, popcorn: ***₹8***',
    ],
  ])('wrap currency symbol %s around ***', (_, text, expectedResult) => {
    const regex = /(?<price>\p{Sc}\d+)/gu;

    expect(text.replace(regex, '***$<price>***')).toEqual(expectedResult);
  });
});
