import selectionSort from './selectionSort';

describe('selectionSort', () => {
  test.each([
    [[23, 49, 13, 1, 4, -2], [-2, 1, 4, 13, 23, 49]],
    [[4, 68, 16, 29], [4, 16, 29, 68]],
    [[30, 15, 8, 1, -7], [-7, 1, 8, 15, 30]],
    [[21, 22, -9, 2, 11], [-9, 2, 11, 21, 22]],
  ])('selection sorting of %s must yield %s', (arr, expectedResult) => {
    expect(selectionSort(arr)).toMatchObject(expectedResult);
  });
});
