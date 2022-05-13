import Node from './Node';

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
    const node = new Node(value);

    if (!this.length) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }

    this.length++;

    return this;
  }

  /**
   * Remove the node from the front of the queue
   * @returns {(Node|undefined)}
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
   * Push elements of an array into the queue
   * @param {Array} arr
   */
  fromArray(arr = []) {
    arr.forEach((value) => this.enqueue(value));
  }
}

export default Queue;
