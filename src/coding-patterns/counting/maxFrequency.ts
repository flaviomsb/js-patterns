/**
 * Given an array of positive integers named nums, return the total frequencies of the elements in nums that have a maximum frequency.
 *
 * The frequency of an element is defined as the number of times that element is repeated in the array.
 *
 * Examples
 * Example 1:
 *
 * Input: nums = [3, 2, 2, 3, 1, 4]
 * Output: 4
 * Explanation: Both 2 and 3 appear twice, which is the highest frequency. So, the total frequency is 2 + 2 = 4.
 * Example 2:
 *
 * Input: nums = [5, 5, 5, 2, 2, 3]
 * Output: 3
 * Explanation: The number 5 appears three times, which is the highest frequency. So, the total frequency is 3.
 **/

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
