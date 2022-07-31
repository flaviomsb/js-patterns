import Token from './Token';
import TokenMachine from './TokenMachine';

describe('Memento pattern', () => {
  test('single token test', () => {
    const tm = new TokenMachine();
    const m = tm.addTokenValue(123);
    tm.addTokenValue(456);
    tm.revert(m);
    expect(tm.tokens.length).toEqual(1);
    expect(tm.tokens[0].value).toEqual(123);
  });

  test('two token test', () => {
    const tm = new TokenMachine();
    tm.addTokenValue(1);
    const m = tm.addTokenValue(2);
    tm.addTokenValue(3);
    tm.revert(m);
    expect(tm.tokens.length).toEqual(2);
    expect(tm.tokens[0].value).toEqual(1);
    expect(tm.tokens[1].value).toEqual(2);
  });

  test('fiddle token test', () => {
    const tm = new TokenMachine();
    const token = new Token(111);
    tm.addToken(token);
    const m = tm.addTokenValue(222);
    token.value = 333;
    tm.revert(m);

    expect(tm.tokens.length).toEqual(2);
    expect(tm.tokens[0].value).toEqual(111);
  });
});
