/**
 * @param {string} str
 * @returns {Object}
 */
function frequency(str = '') {
  const counter = {};
  str.split('').forEach((v) => {
    counter[v] = (counter[v] || 0) + 1;
  });
  return counter;
}

export default function validAnagram(str1 = '', str2 = '') {
  if (str1.length !== str2.length) return false;

  const frequency1 = frequency(str1);
  const frequency2 = frequency(str2);

  return !Object.entries(frequency2).filter(([k, v]) => frequency1[k] !== v).length;
}
