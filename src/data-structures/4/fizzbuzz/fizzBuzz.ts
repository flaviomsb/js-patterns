function printFizzBuzz(v: number): void {
  if (v % 3 === 0 && v % 5 === 0) console.log('fizzbuzz');
  else if (v % 3 === 0) console.log('fizz');
  else if (v % 5 === 0) console.log('buzz');
  else console.log(v);
}

/**
 * @param {number} n
 */
export default function fizzBuzz(n: number): void {
  for (let i = 1; i <= n; i++) {
    printFizzBuzz(i);
  }
}

/**
 * @param {number} n
 */
export function fizzBuzzFp(n: number): void {
  [...Array(n).keys()].map((v) => v + 1).forEach((v) => printFizzBuzz(v));
}
