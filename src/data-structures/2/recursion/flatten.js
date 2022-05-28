/**
 * Accepts an array of arrays and returns a new array with values flattened
 * @param {number[]} arr
 * @return {Array}
 */
export default function flatten(arr) {
  if (!arr.length) return [];

  return arr.reduce((previous, current) => {
    if (Array.isArray(current)) {
      return previous.concat(flatten(current));
    }
    previous.push(current);
    return previous;
  }, []);
}
