function printFizzBuzz(v) {
  if (v % 3 === 0 && v % 5 === 0) console.log('fizzbuzz');
  else if (v % 3 === 0) console.log('fizz');
  else if (v % 5 === 0) console.log('buzz');
  else console.log(v);
}

/**
 * @param {number} n
 */
export default function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    printFizzBuzz(i);
  }
}

/**
 * @param {number} n
 */
export function fizzBuzzFp(n) {
  [...Array(n).keys()].map((v) => v + 1).forEach((v) => printFizzBuzz(v));
}
