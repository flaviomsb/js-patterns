import NodeNext from './NodeNext';

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
    const newNode = new NodeNext(value);
    if (!this.length) {
      this.top = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }
    this.length++;

    return this;
  }

  /**
   * Pop the top value
   * @returns {(NodeNext|undefined)}
   */
  pop() {
    if (!this.length) return undefined;

    const temp = this.top;
    this.top = this.top.next;
    temp.next = null;
    this.length--;

    return temp;
  }

  /**
   * Make Stack from passed arguments
   * @param  {Array} values
   * @returns {Stack}
   */
  static fromValues(...values) {
    const stack = new Stack();
    values.forEach((value) => stack.push(value));
    return stack;
  }
}

export default Stack;
