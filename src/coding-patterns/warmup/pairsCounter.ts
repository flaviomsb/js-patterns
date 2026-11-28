export function pairsCounter(nums: number[]): number {
  let pairCount = 0;
  const map: Record<number, number> = {}; // Use an object instead of Map
  for (const n of nums) {
    map[n] = (map[n] || 0) + 1; // increment the count of 'n' in the map
    // every new occurrence of a number can be paired with every previous occurrence
    // so if a number has already appeared 'p' times, we will have 'p-1' new pairs
    pairCount += map[n] - 1;
  }
  return pairCount;
}
