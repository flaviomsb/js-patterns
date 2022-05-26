/**
 * Check if there is a pair of values in the array where the
 * average of the pairs equals the target average
 * @param {number[]} values
 * @param {number} target
 * @returns {boolean}
 */
export default function averagePair(values, target) {
  if (!values.length) return false;

  let i = 0;
  let j = values.length - 1;

  while (i < j) {
    const average = ((values[i] + values[j]) / 2);
    if (average === target) {
      return true;
    } if (average < target) {
      i++;
    } else {
      j--;
    }
  }

  return false;
}
