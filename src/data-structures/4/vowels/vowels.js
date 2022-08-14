/**
 * Returns the count of vowels in a string
 i @param {string} str
 * @returns {number}
 */
export default function vowels(str) {
  return str.toLowerCase().split('').reduce((count, char) => (['a', 'e', 'i', 'o', 'u'].includes(char) ? count + 1 : count), 0);
}

/**
 * Returns a count of vowels within a string
 * using regex
 * @param {string} str
 * @returns {number}
 */
export function vowelsRegex(str) {
  const matches = str.match(/[aeiou]/gi);

  return matches ? matches.length : 0;
}
