class QueueArray {
  #items = [];

  enqueue(...items) {
    items.forEach((item) => this.#items.push(item));
    return this;
  }

  dequeue() {
    return this.#items.shift();
  }

  size() {
    return this.#items.length;
  }

  front() {
    return this.#items[0];
  }

  isEmpty() {
    return this.#items.length === 0;
  }

  toString() {
    return this.#items.toString();
  }

  clear() {
    this.#items = [];
  }

  static fromValues(...values) {
    const queue = new QueueArray();
    queue.enqueue(...values);
    return queue;
  }
}

export default QueueArray;
