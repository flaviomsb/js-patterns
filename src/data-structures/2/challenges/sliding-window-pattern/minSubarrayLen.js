/**
 * Return the minimal length of a continguous subarray of which the sum
 * is greater than or equal to the integer passed
 * @param {number[]} values
 * @param {number} sum
 * @returns {number}
 */
export default function minSubarrayLen(values, sum) {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;

  while (start < values.length) {
    // if current window doesn't add up to the given sum then
    // move the window to right
    if (total < sum && end < values.length) {
      total += values[end];
      end++;
    } else if (total >= sum) {
      // if current window adds up to at least the sum given then
      // we can shrink the window
      minLen = Math.min(minLen, end - start);
      total -= values[start];
      start++;
    } else {
      // current total less than required total but we reach the end,
      // need this or else we'll be in an infinite loop
      break;
    }
  }

  return minLen === Infinity ? 0 : minLen;
}
