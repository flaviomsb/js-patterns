import NodeNext from './NodeNext';

class SinglyLinkedList {
  #head; // reference to the first node

  #tail; // reference to the last node

  #length; // number of nodes in the linked list

  constructor() {
    this.#head = null;
    this.#tail = null;
    this.#length = 0;
  }

  /**
   * Put a new node at the back of the list
   * @param {*} val
   * @returns {SinglyLinkedList}
   */
  push(val) {
    const node = new NodeNext(val);

    if (this.isEmpty()) {
      this.#head = node;
      this.#tail = this.#head;
    } else {
      this.#tail.next = node;
      this.#tail = node;
    }

    this.#increment();

    return this;
  }

  /**
   * Remove the last node of the list
   * @returns {NodeNext}
   */
  pop() {
    if (this.isEmpty()) return undefined;

    let current = this.#head;
    let newTail = current;

    while (current.next) {
      [newTail, current] = [current, current.next];
    }

    this.#tail = newTail;
    this.#tail.next = null;
    this.#decrement();

    return current;
  }

  /**
   * Remove the first node of the list
   * @returns {NodeNext}
   */
  shift() {
    if (!this.#head) return undefined;

    const node = this.#head;
    this.#head = this.#head.next;
    node.next = null;
    this.#decrement();

    return node;
  }

  /**
   * Add a new node to the beginning of the list
   * @param {*} value
   * @returns {SinglyLinkedList}
   */
  unshift(value) {
    const node = new NodeNext(value);

    if (this.isEmpty()) {
      this.#head = node;
      this.#tail = this.#head;
    } else {
      [node.next, this.#head] = [this.#head, node];
    }

    this.#increment();

    return this;
  }

  /**
   * Return the node for the given index number
   * @param {number} index
   * @returns {(NodeNext|undefined)}
   * @throws {Error}
   */
  get(index) {
    this.#validateIndex(index);

    let j = 0;
    let node = this.#head;
    while (j < index) {
      node = node.next;
      j++;
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
   * @returns {SinglyLinkedList}
   * @throws {Error}
   */
  insert(index, value) {
    this.#validateIndex(index);

    if (index === 0) return this.unshift(value);
    if (index === this.#length - 1) return this.push(value);

    const newNode = new NodeNext(value);
    const previous = this.get(index - 1);
    [previous.next, newNode.next] = [newNode, previous.next];

    this.#increment();

    return this;
  }

  /**
   * Remove the node for the given index number
   * @param {number} index
   * @returns {(NodeNext|undefined)}
   * @throws {Error}
   */
  remove(index) {
    this.#validateIndex(index);

    if (index === 0) return this.shift();
    if (index === this.#length - 1) return this.pop();

    const previous = this.get(index - 1);
    const node = previous.next;
    previous.next = node.next;
    node.next = null;

    this.#decrement();

    return node;
  }

  /**
   * Reverse the nodes of the list
   * @returns {SinglyLinkedList}
   */
  reverse() {
    let node = this.#head;
    this.#head = this.#tail;
    this.#tail = node;
    let next;
    let previous = null;

    for (let i = 0; i < this.#length; i++) {
      next = node.next;
      node.next = previous;
      previous = node;
      node = next;
    }

    return this;
  }

  /**
   * @param {...any} values
   * @returns {SinglyLinkedList}
   */
  static from(...values) {
    const linkedList = new SinglyLinkedList();
    values.forEach((val) => linkedList.push(val));
    return linkedList;
  }

  isEmpty() {
    return this.#length === 0 || !this.#head;
  }

  size() {
    return this.#length;
  }

  toString() {
    let node = this.#head;
    let list = '';
    while (node) {
      list += `${node?.value} -> `;
      node = node.next;
    }

    return list;
  }

  get head() {
    return this.#head;
  }

  get tail() {
    return this.#tail;
  }

  #increment() {
    this.#length += 1;
  }

  #decrement() {
    this.#length -= 1;

    if (this.isEmpty()) {
      this.#head = null;
      this.#tail = this.#head;
    }
  }

  #validateIndex(index) {
    if (index < 0 || index >= this.#length) {
      throw new Error(`index: ${index} is out of bounds`);
    }
  }
}

export default SinglyLinkedList;
