/**
 * Reverse a string using reduce
 * @param {string} str
 * @returns {string}
 */
export default function reverseString(str: string) {
  return str.split('').reduceRight((r, l) => r.concat(l), '');
}

/**
 * Reverse a string using Array.reverse built-in helper
 * @param {string} str
 * @returns {string}
 */
export function reverseStringArray(str: string) {
  return str.split('').reverse().join('');
}

/**
 * Reverse a string using an imperative for loop
 * @param {string} str
 * @returns {string}
 */
export function reverseStringForLoop(str: string) {
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
export function reverseStringForOfLoop(str: string) {
  let reversed = '';

  for (const char of str) {
    reversed = char + reversed;
  }

  return reversed;
}
