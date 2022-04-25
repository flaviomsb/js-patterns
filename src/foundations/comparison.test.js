describe('comparison', () => {
  it('must be true when "0" == 0', () => {
    // eslint-disable-next-line eqeqeq
    expect('0' == 0).toBe(true);
  });

  it('must be false when "0" != 0', () => {
    // eslint-disable-next-line eqeqeq
    expect('0' != 0).toBe(false);
  });

  it('must be true when "0" !== 0 because string !== integer', () => {
    expect('0' !== 0).toBe(true);
  });

  it('must be false when "0" === 0', () => {
    expect('0' === 0).toBe(false);
  });

  it('must be true when "" == 0 because "" is converted to 0', () => {
    // eslint-disable-next-line eqeqeq
    expect('' == 0).toBe(true);
  });
});
