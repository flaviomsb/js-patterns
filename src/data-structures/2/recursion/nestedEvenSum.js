/**
 * Return the sum of all even numbers in an object
 * @param {object} obj
 * @returns {Array}
 */
export default function nestedEvenSum(obj) {
  let sum = 0;

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const val = obj[key];

      if (typeof val === 'object') {
        sum += nestedEvenSum(val);
      }

      if (typeof val === 'number' && val % 2 === 0) {
        sum += val;
      }
    }
  }

  return sum;
}
