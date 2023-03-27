describe('comparison', () => {
  it('must be true when "0" == 0', () => {
    // @ts-ignore
    // eslint-disable-next-line eqeqeq
    expect('0' == 0).toBe(true);
  });

  it('must be false when "0" != 0', () => {
    // @ts-ignore
    // eslint-disable-next-line eqeqeq
    expect('0' != 0).toBe(false);
  });

  it('must be true when "0" !== 0 because string !== integer', () => {
    // @ts-ignore
    expect('0' !== 0).toBe(true);
  });

  it('must be false when "0" === 0', () => {
    // @ts-ignore
    expect('0' === 0).toBe(false);
  });

  it('must be true when "" == 0 because "" is converted to 0', () => {
    // @ts-ignore
    // eslint-disable-next-line eqeqeq
    expect('' == 0).toBe(true);
  });
});
