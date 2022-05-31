import swap from './swap';

/**
 * Receives an unsorted array and returns a sorted version of it using
 * the bubble sort algorithm
 * @param {Array} arr
 * @returns {Array}
 */
export default function bubbleSort(arr) {
  const newArr = [...arr];
  let noSwaps;

  // Loop starts from the end
  for (let i = newArr.length; i > 0; i--) {
    noSwaps = true;
    // inner loop goes until i - 1 because there is no need
    // to run a comparison on the last element which is expected
    // to be already sorted. ie: array with length 4 will do 3 comparisons
    for (let j = 0; j < i - 1; j++) {
      // if element on the left is greater than the one on the right
      // then swap (bubble) it to the right (top)
      if (newArr[j] > newArr[j + 1]) {
        swap(newArr, j, j + 1);
        noSwaps = false;
      }
    }

    if (noSwaps) break;
  }

  return newArr;
}
