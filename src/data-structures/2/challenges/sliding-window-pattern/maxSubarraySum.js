/**
 * Finds the maximum sum of subarray for the given length
 * @param {number[]} values
 * @param {number} length
 * @returns {number}
 */
export default function maxSubarraySum(values, length) {
  if (!values) return null;
  if (length > values.length) return null;

  let maxSum = values.slice(0, length).reduce((a, b) => a + b, 0);
  let tempSum = maxSum;

  for (let i = length; i < values.length; i++) {
    tempSum = tempSum - values[i - length] + values[i];
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
}
