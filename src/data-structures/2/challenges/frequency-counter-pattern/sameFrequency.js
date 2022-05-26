import frequency from './frequency';

/**
 * Find out if two numbers have the same frequency of digits
 * @param {number} num1
 * @param {number} num2
 * @returns {boolean}
 */
export default function sameFrequency(num1, num2) {
  const str1 = `${num1}`;
  const str2 = `${num2}`;

  if (str1.length !== str2.length) return false;

  const freq1 = frequency(str1);
  const freq2 = frequency(str2);
  const keys = Object.keys({ ...freq1, ...freq2 });

  for (const key of keys) {
    if (freq1[key] !== freq2[key]) return false;
  }

  return true;
}
