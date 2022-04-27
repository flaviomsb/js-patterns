// Decimals workaround from https://flaviocopes.com/javascript-decimal-arithmetics/
const sum = (a, b, positions) => {
  const factor = 10 ** positions;
  return (a.toFixed(positions) * factor + b.toFixed(positions) * factor) / factor;
};

describe('Decimals arithmetic', () => {
  test('0.1 + 0.2 is equals to 0.30000000000000004', () => {
    expect(0.1 + 0.2).toEqual(0.30000000000000004);
  });

  test('1.4 - 1 is equals to 0.3999999999999999', () => {
    expect(1.4 - 1).toEqual(0.3999999999999999);
  });

  test('0.1 + 0.2 is equals to 0.3 using the workaround sum function', () => {
    expect(sum(0.1, 0.2, 2)).toEqual(0.3);
  });
});
