/**
 * Takes a nested object and converts all numbers to strings
 * @param {object} obj
 * @returns {object}
 */
export default function stringifyNumbers(obj) {
  const stringfied = {};

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const val = obj[key];

      if (typeof val === 'object' && !Array.isArray(val)) {
        stringfied[key] = stringifyNumbers(val);
      } else if (typeof val === 'number') {
        stringfied[key] = val.toString();
      } else {
        stringfied[key] = val;
      }
    }
  }

  return stringfied;
}
