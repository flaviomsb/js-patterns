export default function hasDuplicates(numbers: number[]): boolean {
  if (!numbers || numbers?.length <= 1) {
    return false;
  }

  const map: Record<number, number> = {};

  for (const num of numbers) {
    if (map[num]) {
      return true;
    }
    map[num] = num;
  }

  return false;
}
