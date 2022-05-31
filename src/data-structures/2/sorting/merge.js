/**
 * Combine two sorted arrays into one sorted array
 * @param {Array} arr1
 * @param {Array} arr2
 * @returns {Array}
 */
export default function merge(arr1, arr2) {
  const newArr = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      newArr.push(arr1[i]);
      i++;
    } else {
      newArr.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    newArr.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    newArr.push(arr2[j]);
    j++;
  }

  return newArr;
}
