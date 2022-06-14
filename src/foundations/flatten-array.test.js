describe('flatten 2D array', () => {
  const arr = [[1, 23], [5, 3, 12], [9, 8, 34], [2, 7, 23, 48]];

  test('using reduce and spread operator to flatten a 2D array', () => {
    const newArr = arr.reduce((a, b) => [...a, ...b], []);

    expect(newArr).toMatchObject([1, 23, 5, 3, 12, 9, 8, 34, 2, 7, 23, 48]);
  });

  test('using reduce and concat to flatten a 2D array', () => {
    const newArr = arr.reduce((a, b) => a.concat(b), []);

    expect(newArr).toMatchObject([1, 23, 5, 3, 12, 9, 8, 34, 2, 7, 23, 48]);
  });
});
