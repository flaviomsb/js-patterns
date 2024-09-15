export function twoSum(nums: number[], target: number): number[] {
  const checkMap = new Map(nums.map((num, index) => [num, index]));

  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    const inMapIndex = checkMap.get(diff);

    if (inMapIndex === i) {
      continue;
    }

    if (inMapIndex) {
      return [i, inMapIndex];
    }
  }

  return [];
}
