/**
 * 1 - Write a pattern to match one or more digits.
 * In the below text, the pattern should match 1, 123, 12345.
 * However, it should not match ABCD123
 *
 * 2 - Extend the previous pattern to now match an optional decimal point and two digits.
 * For example, the pattern should match 1234.56 and 57890 but not match 1234A56
 *
 * 3 - Extend the pattern from the previous question to now match an
 * optional comma followed by three digits.
 * This optional comma and the 3-digit group can appear as many times as possible.
 * The pattern should now match:
 * 123
 * 12345.78
 * 1,234.78
 * 1,234,567.89
 * 0.59
 */
describe('Match numbers', () => {
  describe('Pattern: \\b\\d+\\b', () => {
    test.each([
      ['hflkj24t513', false],
      [30984, true],
      [34, true],
      ['W895904', false],
    ])('%s must test %s', (text, expectedResult) => {
      const regex = /\b\d+\b/;

      expect(regex.test(text)).toEqual(expectedResult);
    });
  });

  describe('Pattern: \\b\\d+(\\.\\d{2})?\\b', () => {
    test.each([
      [123, true],
      [5.87, true],
      [2, true],
      [1.75, true],
      ['1234A56', false],
    ])('%s must test %s', (text, expectedResult) => {
      const regex = /\b\d+(\.\d{2})?\b/;

      expect(regex.test(text)).toEqual(expectedResult);
    });
  });

  describe('Pattern: \\b\\d+(,\\d{3})*(\\.\\d{2})?\\b', () => {
    test.each([
      [123, true],
      [5.87, true],
      ['2,000.90', true],
      ['1,876.75', true],
      ['1234A56', false],
    ])('%s must test %s', (text, expectedResult) => {
      const regex = /\b\d+(,\d{3})*(\.\d{2})?\b/;

      expect(regex.test(text)).toEqual(expectedResult);
    });
  });
});
