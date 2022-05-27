/**
 * Takes a number and adds up all the numbers from 0 to the number passed
 * @param {number} num
 * @return {number}
 */
export default function recursiveRange(num) {
  if (num === 1) return 1;
  return num + recursiveRange(num - 1);
}
