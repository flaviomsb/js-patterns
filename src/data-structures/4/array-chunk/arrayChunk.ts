/**
 * Given an array and chunk size, divide the array into many subarrays
 * where each subarray is of length size
 * @param {Array} arr
 * @param {number} size
 * @returns {Array}
 */
export default function arrayChunk(arr: number[], size: number): number[][] {
  const chunked = [];
  let index = 0;

  while (index < arr.length) {
    chunked.push(arr.slice(index, index + size));
    index += size;
  }

  return chunked;
}
