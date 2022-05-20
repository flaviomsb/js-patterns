import {
  bubbleSort,
  selectionSort,
  insertionSort,
  merge,
  mergeSort,
  pivot,
  quickSort,
} from './Sort';

const numbers = [32, 5, -1, 22, 15, 53, 13];
const sortedNumbers = [-1, 5, 13, 15, 22, 32, 53];

describe('Sorting algorithms', () => {
  test.each([
    ['Bubble sort', bubbleSort],
    ['Selection sort', selectionSort],
    ['Insertion sort', insertionSort],
    ['Merge sort', mergeSort],
  ])('%s', (desc, fn) => {
    expect(fn(...numbers)).toMatchObject(sortedNumbers);
  });

  test('Quick sort', () => {
    expect(quickSort(numbers)).toMatchObject(sortedNumbers);
  });

  test('merge helper function', () => {
    const a = [2, 6, 8, 1];
    const b = [5, 3, 10, 9];

    expect(merge(a, b)).toMatchObject([2, 5, 3, 6, 8, 1, 10, 9]);
  });

  test('pivot helper function', () => {
    const arr = [4, 6, 1, 7, 3, 2, 5];

    expect(pivot(arr)).toMatchObject([3, [2, 1, 3, 4, 6, 7, 5]]);
  });
});
