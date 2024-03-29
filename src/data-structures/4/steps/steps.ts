/**
 * Functional programming approach
 * @param {number} n
 */
export default function steps(n: number) {
  [...Array(n).keys()]
    .map((v) => v + 1)
    .forEach((value, index, arr) => {
      console.log('#'.repeat(value).concat(' '.repeat(arr.length - value)));
    });
}

/**
 * Imperative approach
 * @param {number} n
 */
export function stepsAlt(n: number) {
  for (let row = 0; row < n; row++) {
    let stair = '';

    for (let column = 0; column < n; column++) {
      stair += (column <= row) ? '#' : ' ';
    }

    console.log(stair);
  }
}

/**
 * Recursive approach
 * @param {number} n
 * @param {number} row
 * @param {string} stair
 * @returns {void|string}
 */
export function stepsRecursive(n: number, row = 0, stair = '') {
  if (n === row) return;

  if (n === stair.length) {
    console.log(stair);
    stepsRecursive(n, row + 1);
  } else {
    stepsRecursive(n, row, stair.concat(stair.length <= row ? '#' : ' '));
  }
}
