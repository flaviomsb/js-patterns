/**
 * Retuns an array of all strings found within a nested object
 * @param {object} obj
 * @returns {Array}
 */
export default function collectStrings(obj) {
  let strings = [];

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const val = obj[key];

      if (typeof val === 'object' && !Array.isArray(val)) {
        strings = strings.concat(collectStrings(val));
      } else if (typeof val === 'string') {
        strings.push(val);
      }
    }
  }

  return strings;
}
