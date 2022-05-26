/**
 * Check whether there are any duplicates among the arguments
 * @param {Array} values
 * @returns {boolean}
 */
export default function areThereDuplicates(...values) {
  if (!values.length) return false;

  values.sort((a, b) => a - b);
  let i = 0;
  let j = 1;

  while (j < values.length) {
    if (values[i] === values[j]) {
      return true;
    }
    i++;
    j++;
  }

  return false;
}
