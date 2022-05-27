/**
 * Checks whether the characters in the first string form a subsequence
 * of the characters in the second string
 * @param {string} str1
 * @param {string} str2
 * @returns {boolean}
 */
export default function isSubsequence(str1, str2) {
  if (!str1) return true;
  const sub = [];
  let left = 0;
  let right = 0;

  while (right < str2.length) {
    if (str2[right] === str1[left]) {
      sub.push(str1[left]);
      left++;
    }
    right++;
  }

  return sub.length === str1.length;
}
