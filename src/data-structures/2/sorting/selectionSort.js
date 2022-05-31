import swap from './swap';

/**
 * Receives an unsorted array and returns a sorted version of it using
 * the selection sort algorithm
 * @param {Array} arr
 * @returns {Array}
 */
export default function selectionSort(arr) {
  const newArr = [...arr];
  let min = 0; // index of minimum value

  for (let i = 0; i < newArr.length - 1; i++) {
    min = i;

    for (let j = i + 1; j < newArr.length; j++) {
      if (newArr[j] < newArr[min]) min = j;
    }

    if (i !== min) swap(newArr, i, min);
  }

  return newArr;
}
