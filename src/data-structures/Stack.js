import Node from './Node';

class Stack {
  /**
   * Begin the stack with any value
   * @param {*} value
   */
  constructor(value) {
    this.top = null;
    this.length = 0;

    if (value) {
      this.push(value);
    }
  }

  /**
   * Push new value onto the top of the stack
   * @param {*} value
   * @returns {Stack}
   */
  push(value) {
    const node = new Node(value);
    if (!this.length) {
      this.top = node;
    } else {
      node.next = this.top;
      this.top = node;
    }
    this.length++;

    return this;
  }

  /**
   * Pop the top value
   * @returns {(Node|undefined)}
   */
  pop() {
    if (!this.length) return undefined;

    const temp = this.top;
    this.top = this.top.next;
    temp.next = null;
    this.length--;

    return temp;
  }

  fromArray(value = []) {
    value.forEach((val) => this.push(val));
  }
}

export default Stack;
