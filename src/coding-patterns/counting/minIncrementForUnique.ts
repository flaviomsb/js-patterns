export default function minIncrementForUnique(nums: number[]) {
  let minMoves = 0;
  const max = Math.max(...nums);
  const frequency = new Array(nums.length + max).fill(0);

  nums.forEach((num) => {
    frequency[num]++;
  });

  for (let i = 0; i < frequency.length; i++) {
    if (frequency[i] <= 1) {
      continue;
    }

    const excess = frequency[i] - 1;
    frequency[i + 1] += excess;
    minMoves += excess;
  }
  return minMoves;
}
