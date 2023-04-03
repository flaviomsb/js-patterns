import memoize from '../memoize';
/**
 * Classic fibonacci problem using different approaches
 */

export function iterativeFibonacci(num) {
  const results = [0, 1];

  for (let i = 2; i <= num; i++) {
    const a = results[i - 1];
    const b = results[i - 2];

    results.push(a + b);
  }

  return results[num];
}

export function recursiveFibonacci(num) {
  if (num < 2) return num;

  return recursiveFibonacci(num - 1) + recursiveFibonacci(num - 2);
}

export default function fibonacci(num) {
  if (num < 2) return num;

  // eslint-disable-next-line no-use-before-define
  return memoized(num - 1) + memoized(num - 2);
}

const memoized = memoize(fibonacci);
