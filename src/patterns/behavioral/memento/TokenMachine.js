import Memento from './Memento';
import Token from './Token';

class TokenMachine {
  constructor() {
    this.tokens = [];
  }

  addTokenValue(value) {
    return this.addToken(new Token(value));
  }

  addToken(token) {
    this.tokens.push(token);
    const m = new Memento();
    m.tokens = this.tokens.map((t) => new Token(t.value));
    return m;
  }

  revert(m) {
    this.tokens = m.tokens.map((t) => new Token(t.value));
  }
}

export default TokenMachine;
