type NumberFrequencyDict = Record<number, number>;

export function numbersFrequency(nums: number[]) {
  return nums.reduce(
    (freq: NumberFrequencyDict, num: number): NumberFrequencyDict => ({
      ...freq,
      [num]: freq[num] ? freq[num] + 1 : 1,
    }),
    {} as NumberFrequencyDict,
  );
}
