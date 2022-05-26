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
  let i = 0;
  let j = 0;

  while (j < str2.length) {
    if (str2[j] === str1[i]) {
      sub.push(str1[i]);
      i++;
    }
    j++;
  }

  return sub.length === str1.length;
}
