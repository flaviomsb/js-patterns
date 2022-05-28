/**
 * Accepts a string and return a new string in reverse
 * @param {string} str
 * @return {string}
 */
export default function reverse(str) {
  if (str.length <= 1) return str;
  const last = str.length - 1;
  return str[last] + reverse(str.slice(0, last));
}
