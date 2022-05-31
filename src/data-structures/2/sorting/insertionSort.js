/* eslint-disable no-var */
/* eslint-disable vars-on-top */
/**
 * Receives an unsorted array and returns a sorted version of it using
 * the selection sort algorithm
 * @param {Array} arr
 * @returns {Array}
 */
export default function insertionSort(arr) {
  const newArr = [...arr];
  let current;

  for (let i = 1; i < newArr.length; i++) {
    current = newArr[i];

    for (var j = i - 1; newArr[j] > current && j >= 0; j--) {
      newArr[j + 1] = newArr[j];
    }

    // eslint-disable-next-line block-scoped-var
    newArr[j + 1] = current;
  }

  return newArr;
}
