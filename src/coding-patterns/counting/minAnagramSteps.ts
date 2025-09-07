export function minAnagramSteps(first: string, second: string): number {
  return Object.values(
    Array.from({ length: second.length }, (_, i) => i).reduce(
      (frequencies, charIndex) => {
        const charInFirst = first[charIndex];
        const charInSecond = second[charIndex];

        frequencies[charInFirst] = (frequencies[charInFirst] || 0) + 1;
        frequencies[charInSecond] = (frequencies[charInSecond] || 0) - 1;

        return frequencies;
      },
      {} as Record<string, number>,
    ),
  ).reduce((numOfSteps, num) => (num > 0 ? numOfSteps + num : numOfSteps), 0);
}
