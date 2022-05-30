class PriorityItem {
  #value;

  #priority;

  constructor({ value, priority }) {
    this.#value = value;
    this.#priority = priority;
  }

  getValue() {
    return this.#value;
  }

  getPriority() {
    return this.#priority;
  }

  toString() {
    return JSON.stringify({ value: this.#value, priority: this.#priority });
  }
}

export default PriorityItem;
