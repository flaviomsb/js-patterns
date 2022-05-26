/**
 * @param {string|array} val
 * @returns {Object}
 */
export default function frequency(val) {
  let items = val;

  if (typeof items === 'string') {
    items = items.trim().split('');
  }

  return items.reduce((previous, current) => {
    const freq = { ...previous };
    freq[current] = (freq[current] || 0) + 1;
    return freq;
  }, {});
}
