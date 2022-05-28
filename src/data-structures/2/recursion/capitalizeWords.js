/**
 * Given an array of words, return a new array containing each word capitalized
 * @param {string[]} arr
 * @returns {Array}
 */
export default function capitalizeWords(arr) {
  if (arr.length === 1) {
    return [arr[0].toUpperCase()];
  }

  const words = capitalizeWords(arr.slice(0, -1));
  words.push(arr.slice(arr.length - 1)[0].toUpperCase());

  return words;
}
