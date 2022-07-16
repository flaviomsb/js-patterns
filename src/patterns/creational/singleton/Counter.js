class Counter {
  #instance;

  #count = 0;

  constructor() {
    if (this.#instance) {
      throw new Error('Only one instance of Counter is allowed');
    }

    this.#instance = this;
  }

  getInstance() {
    return this.#instance;
  }

  getCount() {
    return this.#count;
  }

  increment() {
    this.#count += 1;
    return this;
  }

  decrement() {
    this.#count -= 1;
    return this;
  }
}

const singletonCounter = Object.freeze(new Counter());
export default singletonCounter;
