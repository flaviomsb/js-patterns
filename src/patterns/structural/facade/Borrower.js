class Borrower {
  #name;

  #creditScore;

  #isEmployed;

  #clientYears;

  constructor({ name, creditScore, isEmployed = false, clientYears = 0 }) {
    this.#name = name;
    this.#creditScore = creditScore;
    this.#isEmployed = isEmployed;
    this.#clientYears = clientYears;
  }

  get name() {
    return this.#name;
  }

  get creditScore() {
    return this.#creditScore;
  }

  get isEmployed() {
    return this.#isEmployed;
  }

  get clientYears() {
    return this.#clientYears;
  }
}

export default Borrower;
