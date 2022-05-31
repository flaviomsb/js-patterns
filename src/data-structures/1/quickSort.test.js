import quickSort, { pivot } from './quickSort';

describe('quickSort', () => {
  test('sorting', () => {
    const numbers = [32, 5, -1, 22, 15, 53, 13];
    const sortedNumbers = [-1, 5, 13, 15, 22, 32, 53];

    expect(quickSort(numbers)).toMatchObject(sortedNumbers);
  });

  test('pivot helper function', () => {
    const arr = [4, 6, 1, 7, 3, 2, 5];

    expect(pivot(arr)).toMatchObject([3, [2, 1, 3, 4, 6, 7, 5]]);
  });
});
