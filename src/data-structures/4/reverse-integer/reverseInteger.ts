import reverseString from '../reverse-string/reverseString';

/**
 * Reverses an integer
 * @param {number} num
 * @returns {number}
 */
export default function reverseInteger(num: number) {
  return parseInt(reverseString(num.toString()), 10) * Math.sign(num);
}
