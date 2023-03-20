interface Dictiorary {
  [key: string]: number;
}

/**
 * Finds the character with most frequency
 * @param {string} str
 * @returns {string}
 */
export default function maxChar(str: string) {
  const frequency = str.split('')
    .reduce((freq: Dictiorary, char: string) => ({ ...freq, ...{ [char]: (freq[char] || 0) + 1 } }), {});

  return Object.entries(frequency)
    .reduce((previous, current) => (current[1] > previous[1] ? current : previous), ['', 0])
    .at(0);
}
