/**
 * Receives an arr of strings and capitalize the first letter of each string
 * @param {string[]} arr
 * @returns {Array}
 */
export default function capitalizeFirst(arr) {
  function transform(val) {
    return val[0].toUpperCase() + val.substring(1);
  }

  if (arr.length === 1) {
    return [transform(arr[0])];
  }

  const words = capitalizeFirst(arr.slice(0, -1));
  words.push(transform(arr.slice(arr.length - 1)[0]));

  return words;
}
