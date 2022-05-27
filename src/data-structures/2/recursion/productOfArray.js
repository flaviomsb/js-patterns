/**
 * Takes an array of numbers and return the product of them
 * @param {Array} arr
 * @return {number}
 */
export default function productOfArray(arr) {
  if (!arr.length) return 1;
  return arr.shift() * productOfArray(arr);
}
