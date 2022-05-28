/**
 * Returns true if a single value in the passed array returns true
 * when passed to the callback. Otherwise, returns false.
 * @param {number[]} arr
 * @param {function} callback
 * @return {boolean}
 */
export default function someRecursive(arr, callback) {
  if (!arr.length) return false;
  if (callback(arr[0])) return true;
  return someRecursive(arr.slice(1), callback);
}
