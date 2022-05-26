import frequency from './frequency';

/**
 * Check whether there are any duplicates among the arguments
 * @param {Array} values
 * @returns {boolean}
 */
export default function areThereDuplicates(...values) {
  if (!values.length) return false;

  const freq = frequency(values);

  return !!Object.entries(freq).filter((([, v]) => v > 1)).length;
}
