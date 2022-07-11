describe('negative look behind (?<=exp)', () => {
  test('match items whose price do not end with .99', () => {
    const text = `
chair 4.98
coffee 1.99
fan 10.97
car 11499.59
banana 0.99`;

    expect(text.match(/.+(?<!\.99)$/gm)).toMatchObject([
      'chair 4.98',
      'fan 10.97',
      'car 11499.59',
    ]);
  });
});
