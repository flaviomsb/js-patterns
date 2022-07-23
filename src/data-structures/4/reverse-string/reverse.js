/**
 * Reverse a string using reduce
 * @param {string} str
 * @returns {string}
 */
export default function reverse(str) {
  return str.split('').reduceRight((r, l) => r.concat(l), '');
}

/**
 * Reverse a string using Array.reverse built-in helper
 * @param {string} str
 * @returns {string}
 */
export function reverseAsArray(str) {
  return str.split('').reverse().join('');
}

/**
 * Reverse a string using an imperative for loop
 * @param {string} str
 * @returns {string}
 */
export function reverseForLoop(str) {
  let reversed = '';

  for (let i = str.length - 1; i >= 0; --i) {
    reversed += str[i];
  }

  return reversed;
}

/**
 * Reverse a string using a for of loop
 * @param {string} str
 * @returns {string}
 */
export function reverseForOfLoop(str) {
  let reversed = '';

  for (const char of str) {
    reversed = char + reversed;
  }

  return reversed;
}
