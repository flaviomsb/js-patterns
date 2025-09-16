import { describe, test, expect } from '@jest/globals';
import { buildPredicate, Conditions } from './buildPredicate';

describe('buildPredicate', () => {
  test('buildPredicate function is defined', () => {
    expect(buildPredicate).toBeDefined();
  });

  test('should return empty query string and args on invalid conditions', () => {
    const { queryString, args } = buildPredicate({} as Conditions);

    expect(queryString).toBe('');
    expect(args.length).toBe(0);
  });

  test.each<[string, Conditions]>([
    ['name == $0', { operator: 'AND', conditions: [['name', '==', 'john']] }],
    [
      '(category IN $0 OR city <> $1)',
      {
        operator: 'OR',
        conditions: [
          ['status', '==', 'approved', false],
          ['category', 'IN', ['sales', 'marketing']],
          ['city', '<>', 'San Francisco'],
        ],
      },
    ],
    [
      '(status == $0 AND (category == $1 OR category == $2) AND date > $3) ' +
        'DISTINCT(name) SORT(name DESC) LIMIT(1000)',
      {
        operator: 'AND',
        limit: 1000,
        distinct: 'name',
        sort: ['name', 'DESC'],
        conditions: [
          ['name', '!=', null, false],
          ['status', '==', 3],
          {
            operator: 'OR',
            conditions: [
              ['category', '==', 'sales'],
              ['category', '==', 'marketing'],
            ],
          },
          ['date', '>', new Date()],
        ],
      },
    ],
    [
      '(category == $0 AND (cityId IN $1 OR zipCode <> $2 OR (officeSize >= $3 AND daysOpen > $4)))',
      {
        operator: 'AND',
        conditions: [
          ['status', '==', 'approved', false],
          ['category', '==', 'store'],
          {
            operator: 'OR',
            conditions: [
              ['cityId', 'IN', [1000, 2000]],
              ['zipCode', '<>', 25493],
              {
                operator: 'AND',
                conditions: [
                  ['officeSize', '>=', 300],
                  ['daysOpen', '>', 5],
                ],
              },
            ],
          },
        ],
      },
    ],
  ])('should build query string %s', (expectedQueryString, conditions) => {
    const { queryString } = buildPredicate(conditions);
    expect(queryString).toEqual(expectedQueryString);
  });
});
