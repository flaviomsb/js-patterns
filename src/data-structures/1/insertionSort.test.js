import insertionSort from './insertionSort';

describe('insertionSort', () => {
  test('sorting', () => {
    const numbers = [32, 5, -1, 22, 15, 53, 13];
    const sortedNumbers = [-1, 5, 13, 15, 22, 32, 53];

    expect(insertionSort(...numbers)).toMatchObject(sortedNumbers);
  });
});
