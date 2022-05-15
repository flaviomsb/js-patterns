import NodeNext from './NodeNext';

class LinkedList {
  /**
   * Init the list
   *
   * @param {*} value
   */
  constructor(value) {
    this.length = 0;
    this.head = null;
    this.tail = null;

    if (value) {
      this.push(value);
    }
  }

  /**
   * Push new node to the end of the list
   * @param {*} value
   * @returns {LinkedList}
   */
  push(value) {
    const newNode = new NodeNext(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;

    return this;
  }

  /**
   * Remove the last node from the list
   * @returns {(NodeNext|undefined)}
   */
  pop() {
    if (!this.head) return undefined;

    // Begin by pointing temp and prev to head
    let temp = this.head;
    let prev = this.head;

    // Loop through until temp has a next value
    while (temp.next) {
      prev = temp; // keep track of the previous node in order to later set the new tail
      temp = temp.next; // move temp to next so the loop can continue
    }
    this.tail = prev; // new tail is equals to prev
    this.tail.next = null; // tail next must point to null
    this.length--; // adjust list length

    // If list is empty, then head and tail must be null
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return temp; // return found element
  }

  /**
   * Add a new node to the beginning of the list
   * @param {*} value
   * @returns {LinkedList}
   */
  unshift(value) {
    const newNode = new NodeNext(value);

    // If empty, make both head and tail point to the new node
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // Set next prop of the new node to be the current head
      // then set the new head to be the new node
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;

    return this;
  }

  /**
   * Remove the first node from the beginning of the list
   * @returns {(NodeNext|undefined)}
   */
  shift() {
    if (!this.head) return undefined;

    const node = this.head;
    this.head = this.head.next;
    node.next = null;
    this.length--;
    if (!this.length) {
      this.tail = null;
    }

    return node;
  }

  /**
   * Return the node for the given index number
   * @param {number} index
   * @returns {(NodeNext|undefined)}
   * @throws {Error}
   */
  get(index) {
    this.validateIndex(index);

    let node = this.head;
    for (let i = 0; i < index; i++) {
      node = node.next;
    }

    return node;
  }

  /**
   * Update a node value at the given index
   * @param {number} index
   * @param {*} value
   * @returns {boolean}
   * @throws {Error}
   */
  set(index, value) {
    const node = this.get(index);

    if (node) {
      node.value = value;
      return true;
    }

    return false;
  }

  /**
   * Insert a new node at the given index
   * @param {number} index
   * @param {*} value
   * @returns {LinkedList}
   * @throws {Error}
   */
  insert(index, value) {
    this.validateIndex(index);

    if (index === 0) return this.unshift(value);
    if (index === this.length) return this.push(value);

    const newNode = new NodeNext(value);
    const prev = this.get(index - 1);
    newNode.next = prev.next;
    prev.next = newNode;
    this.length++;

    return this;
  }

  /**
   * Remove the node for the given index number
   * @param {number} index
   * @returns {(NodeNext|undefined)}
   * @throws {Error}
   */
  remove(index) {
    this.validateIndex(index);

    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    const prev = this.get(index - 1);
    const toRemove = prev.next;
    prev.next = toRemove.next;
    toRemove.next = null;
    this.length--;

    return toRemove;
  }

  /**
   * Reverse the nodes of the list
   * @returns {LinkedList}
   */
  reverse() {
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;
    let { next } = temp;
    let prev = null;

    for (let i = 0; i < this.length; i++) {
      next = temp.next;
      temp.next = prev;
      prev = temp;
      temp = next;
    }

    return this;
  }

  /**
   * Push elements of an array into the list
   * @param {Array} arr
   * @returns {LinkedList}
   */
  static fromValues(...values) {
    const linkedList = this.createInstance();
    values.forEach((value) => linkedList.push(value));
    return linkedList;
  }

  /**
   * Return new instace of list class
   * @returns {LinkedList}
   */
  static createInstance() {
    return new LinkedList();
  }

  /**
   * Check if index is out of bounds
   * @param {number} index
   * @throws {Error}
   */
  validateIndex(index) {
    if (index < 0 || index >= this.length) {
      throw new Error(`index: ${index} is out of bounds`);
    }
  }
}

export default LinkedList;
