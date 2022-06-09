describe('regex string search', () => {
  test('finding first digit index at string', () => {
    expect('zip code 98023. Phone number 555-5555'.search(/\d+?/)).toBe(9);
  });

  test('digit not found', () => {
    expect('I am ten years old'.search(/\d/)).toBe(-1);
  });

  test('strict digit search', () => {
    expect('I am 10 years old'.search(/^\d+$/)).toBe(-1);
    expect('9890'.search(/^\d+$/)).toBe(0);
  });
});
