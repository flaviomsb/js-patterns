class NodeNext {
  #value;

  #next;

  constructor(value) {
    this.#value = value;
    this.#next = null;
  }

  get value() {
    return this.#value;
  }

  set value(value) {
    this.#value = value;
  }

  get next() {
    return this.#next;
  }

  set next(next) {
    this.#next = next;
  }
}

export default NodeNext;
