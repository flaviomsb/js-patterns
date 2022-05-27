/**
 * Should find the first pair where the sum is 0 and return an array that
 * includes both values that sum to zero or undefined if a pair does not exist.
 * @param {Array} arr
 * @returns {Array}
 */
export default function sumZero(arr) {
  if (!arr || !arr.length) return [];

  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];

    if (sum === 0) return [arr[left], arr[right]];
    if (sum < 0) left++;
    else right--;
  }

  return [];
}
