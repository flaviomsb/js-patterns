class Bird {
  #age;

  constructor(age = 0) {
    this.#age = age;
  }

  set age(value) {
    this.#age = value;
  }

  fly() {
    return this.#age < 10 ? 'flying' : 'too old';
  }
}

export default Bird;
