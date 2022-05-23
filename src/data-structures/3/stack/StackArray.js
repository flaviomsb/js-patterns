class StackArray {
  #items = [];

  push(item) {
    this.#items.push(item);
    return this;
  }

  pop() {
    return this.#items.pop();
  }

  size() {
    return this.#items.length;
  }

  peek() {
    return this.#items[this.size() - 1];
  }

  isEmpty() {
    return !this.#items.length;
  }

  clear() {
    this.#items = [];
  }

  toString() {
    return this.#items.toString();
  }

  toArray() {
    return this.#items;
  }

  static fromValues(...values) {
    const stack = new StackArray();
    values.forEach((val) => stack.push(val));
    return stack;
  }
}

export default StackArray;
