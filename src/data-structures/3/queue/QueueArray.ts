class QueueArray<T> {
  private items: Array<T> = [];

  enqueue(...items: Array<T>) {
    items.forEach((item) => this.items.push(item));
    return this;
  }

  dequeue() {
    return this.items.shift();
  }

  size() {
    return this.items.length;
  }

  front() {
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  toString() {
    return this.items.toString();
  }

  clear() {
    this.items = [];
  }

  static fromValues<U>(...values: Array<U>) {
    const queue = new QueueArray();
    queue.enqueue(...values);
    return queue;
  }
}

export default QueueArray;
