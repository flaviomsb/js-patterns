import merge from './merge';

/**
 * Sort an array of numbers using the merge sort algorithm
 * @param {number[]} arr
 * @return {number[]}
 */
export default function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);
  return merge(mergeSort(left), mergeSort(right));
}
