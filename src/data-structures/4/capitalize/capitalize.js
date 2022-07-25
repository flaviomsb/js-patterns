/**
 * Capitalizes the first letter of each work in a string
 * @param {string} str
 * @returns {string}
 */
export default function capitalize(str) {
  return str.split(/\s/).map((word) => {
    if (word.length === 1) return word.toUpperCase();

    return word[0].toUpperCase().concat(word.substring(1));
  }).join(' ');
}
