import flatten from './flatten';

describe('flatten', () => {
  test.each([
    [[1, 2, 3, [4, 5]], [1, 2, 3, 4, 5]],
    [[1, [2, [3, 4], [[5]]]], [1, 2, 3, 4, 5]],
    [[[1], [2], [3]], [1, 2, 3]],
    [[[[[1], [[[2]]], [[[[[[[3]]]]]]]]]], [1, 2, 3]],
    [[], []],
  ])('Flattening of %s is %s', (arr, expectedResult) => {
    expect(flatten(arr)).toMatchObject(expectedResult);
  });
});
