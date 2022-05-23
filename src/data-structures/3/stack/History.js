import StackArray from './StackArray';

class History {
  #back = new StackArray();

  #forward = new StackArray();

  #current = '';

  constructor(initialLocation) {
    this.#current = initialLocation;
  }

  navigate(location) {
    const temp = this.#current;
    this.#current = location;
    this.#back.push(temp);
  }

  goBack() {
    const location = this.#back.pop();
    if (!location) return;

    const temp = this.#current;
    this.#current = location;
    this.#forward.push(temp);
  }

  goForward() {
    const location = this.#forward.pop();
    if (!location) return;

    const temp = this.#current;
    this.#current = location;
    this.#back.push(temp);
  }

  data() {
    return {
      current: this.#current,
      back: this.#back.toArray(),
      forward: this.#forward.toArray(),
    };
  }

  toString() {
    return `
current: ${this.#current},
back: ${this.#back.toString()},
forward: ${this.#forward.toString()},
`;
  }
}

export default History;
