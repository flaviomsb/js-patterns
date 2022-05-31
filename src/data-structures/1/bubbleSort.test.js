import bubbleSort from './bubbleSort';

describe('bubbleSort', () => {
  test('sorting', () => {
    const numbers = [32, 5, -1, 22, 15, 53, 13];
    const sortedNumbers = [-1, 5, 13, 15, 22, 32, 53];

    expect(bubbleSort(...numbers)).toMatchObject(sortedNumbers);
  });
});
