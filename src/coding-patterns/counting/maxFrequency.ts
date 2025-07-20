type NumberFrequencyDict = {
  [key: number]: number;
};

function frequency(nums: number[]) {
  return nums.reduce(
    (freq: NumberFrequencyDict, num: number): NumberFrequencyDict => ({
      ...freq,
      [num]: freq[num] ? freq[num] + 1 : 1,
    }),
    {} as NumberFrequencyDict,
  );
}

export default function maxFrequency(nums: number[]): number {
  const frequencies = Object.values(frequency(nums));
  const max = Math.max(...frequencies);

  return frequencies.reduce((sum: number, freq: number): number => {
    if (freq === max) {
      sum += freq;
    }
    return sum;
  }, 0);
}
