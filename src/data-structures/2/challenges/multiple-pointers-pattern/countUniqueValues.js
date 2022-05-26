/**
 * Look into an array and return a count of the unique values
 * @param {Array} arr
 * @returns {number}
 */
export default function countUniqueValues(arr) {
  if (!arr.length) return 0;

  const items = [...arr];
  let i = 0;
  let j = 1;
  while (j < items.length) {
    if (items[i] !== items[j]) {
      i++;
      items[i] = items[j];
    }
    j++;
  }

  return i + 1;
}
