import BaseConverter from './BaseConverter';

describe('BaseConverter', () => {
  test('Decimal to binary', () => {
    expect(BaseConverter.decimalToBinary(210)).toBe('11010010');
  });

  test('Decimal to octal', () => {
    expect(BaseConverter.decimalToOctal(210)).toBe('322');
  });

  test('Decimal to hex', () => {
    expect(BaseConverter.decimalToHex(210)).toBe('D2');
  });
});
