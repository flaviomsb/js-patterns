/**
 * Return the power of the base to the exponent
 * @param {numbwe} base
 * @param {number} exp
 * @returns {number}
 */
export default function power(base, exp) {
  if (exp === 0) return 1;
  return base * power(base, exp - 1);
}
