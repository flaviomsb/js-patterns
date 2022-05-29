/**
 * Classic binary search of a sorted array
 * @param {number[]} arr
 * @param {number} val
 */
export default function binarySearch(arr, val) {
  let left = 0;
  let right = arr.length - 1;

  function calcMiddle() {
    return Math.floor((left + right) / 2);
  }

  let middle = calcMiddle();

  while (arr[middle] !== val && left <= right) {
    if (val < arr[middle]) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
    middle = calcMiddle();
  }

  return arr[middle] === val ? middle : -1;
}
