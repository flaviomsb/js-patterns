
describe('destructuring', () => {
  it('should destruct [, a, b] = [10, 20]', () => {
    const [, a, b] = [10, 20];
    expect(a).toEqual(20);
    expect(b).toEqual(undefined);
  });

  it('should destruct { b, ...rest } = { a: 10, b: 20, c: 89, d: "__wsd" }', () => {
    const { b, ...rest } = { a: 10, b: 20, c: 89, d: '__wsd' };
    expect(b).toEqual(20);
    expect(rest).toEqual({ a: 10, c: 89, d: '__wsd' });
  });

  it('should destruct { b: { c: { d: score } } } = { b: { c: { d: 85 } } }', () => {
    const { b: { c: { d: score } } } = { b: { c: { d: 85 } } };
    expect(score).toEqual(85);
  });
});
