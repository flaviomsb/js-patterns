import NodeNext from './NodeNext';

class Queue {
  /**
   * Begin the queue
   * @param {*} value
   */
  constructor(value) {
    this.length = 0;
    this.first = null;
    this.last = null;

    if (value) {
      this.enqueue(value);
    }
  }

  /**
   * Push new node to the end of the queue
   * @param {*} value
   * @returns {Queue}
   */
  enqueue(value) {
    const newNode = new NodeNext(value);

    if (!this.length) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    this.length++;

    return this;
  }

  /**
   * Remove the node from the front of the queue
   * @returns {(NodeNext|undefined)}
   */
  dequeue() {
    if (!this.length) return undefined;

    const node = this.first;
    if (this.length === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first.next;
      node.next = null;
    }

    this.length--;

    return node;
  }

  /**
   * Make Stack from passed arguments
   * @param  {Array} values
   * @returns {Stack}
   */
  static fromValues(...values) {
    const queue = new Queue();
    values.forEach((value) => queue.enqueue(value));
    return queue;
  }
}

export default Queue;
