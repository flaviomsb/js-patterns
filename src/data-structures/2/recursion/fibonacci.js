/**
 * Fibonacci sequence calculation
 * @param {number} num
 * @return {number}
 */
export default function fibonacci(num) {
  if (num <= 2) return 1;
  return fibonacci(num - 1) + fibonacci(num - 2);
}
