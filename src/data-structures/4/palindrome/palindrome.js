/**
 * @param {string} str
 * @returns {boolean}
 */
export default function palindrome(str) {
  if (str === null || typeof str === 'undefined') {
    return false;
  }

  // Could have simply used a reverse(str) === str from
  // the string reversal exercise
  return str.split('').every((char, index) => char === str[(str.length - 1) - index]);
}
