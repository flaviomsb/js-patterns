import { NodeNextPrev } from './NodeNextPrev';

export class DoublyLinkedList {
  /**
   * @type {NodeNextPrev|null}
   * @description Head node of the list
   */
  head = null;

  /**
   * @type {NodeNextPrev|null}
   * @description Tail node of the list
   */
  tail = null;

  /**
   * @type {number}
   * @description List's length
   */
  length = 0;

  /**
   * This function should accept a value add a node to the end
   * of the DoublyLinkedList with the given value. It should
   * return the DoublyLinkedList.
   * @param {*} value
   * @returns {this}
   */
  push(value) {
    const node = new NodeNextPrev(value);

    if (this.length === 0) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }

    this.length++;

    return this;
  }

  /**
   * This function should remove a node at the end of the DoublyLinkedList.
   * It should return the node removed
   * @returns {NodeNextPrev|null}
   */
  pop() {
    if (!this.tail) return null;

    const node = this.tail;

    if (this.length === 1) {
      this.tail = null;
      this.head = this.tail;
    } else {
      this.tail = node.prev;
      this.tail.next = null;
      node.prev = null;
    }

    this.length--;

    return node;
  }

  /**
   * This function should accept a value and add a node to
   * the beginning of the DoublyLinkedList with the given value.
   * It should return the DoublyLinkedList.
   * @param {*} value
   * @returns {this}
   */
  unshift(value) {
    const node = new NodeNextPrev(value);

    if (this.length === 0) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
    }

    this.length++;

    return this;
  }

  /**
   * This function should remove a node at the beginning
   * of the DoublyLinkedList. It should return the node removed.
   *
   * @returns {NodeNextPrev|null}
   */
  shift() {
    if (!this.head) return null;

    const node = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = this.head;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
      node.next = null;
    }

    this.length--;

    return node;
  }

  /**
   * This internal/helper function should find a node at a
   * specified index in a DoublyLinkedList.
   * It should return the found node.
   * @param {number} index
   * @returns {NodeNextPrev|null}
   */
  get(index) {
    if (this.#invalidIndex(index)) {
      return null;
    }

    let count, current;

    // Let's divide the list into two parts
    // If index falls within the first half then do this
    if (index <= Math.floor(this.length / 2)) {
      count = 0;
      current = this.head;

      while (count !== index) {
        current = current.next;
        count++;
      }
    } else { // This means index is on the second half of the list
      count = this.length - 1;
      current = this.tail;

      while (count !== index) {
        current = current.prev;
        count--;
      }
    }

    return current;
  }

  /**
   * This function should accept an index and a value and update
   * the value of the node in the DoublyLinkedList at the index
   * with the new value. It should return true if the node is
   * updated successfully, or false if an invalid index is passed in.
   * @param {number} index
   * @param {*} value
   * @returns {boolean}
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
   * This internal/helper function should insert a node at a specified
   * index in a DoublyLinkedList. It should return true if the index is
   * valid, and false if the index is invalid (less than 0 or greater than
   * the length of the list).
   * @param {number} index
   * @param {*} value
   * @returns {boolean}
   */
  insert(index, value) {
    if (this.#invalidIndex(index)) {
      return false;
    }

    if (index === 0) {
      this.unshift(value);
      return true;
    }

    if (index === this.length) {
      this.push(value);
      return true;
    }

    const node = new NodeNextPrev(value);
    const before = this.get(index - 1);

    if (!before) {
      return false;
    }

    const after = before.next;

    before.next = node;
    node.prev = before;
    node.next = after;
    after.prev = node;

    this.length++;

    return true;
  }

  /**
   * This function should remove a node at a specified index
   * in a DoublyLinkedList. It should return the removed node.
   * If the index is valid, or null if the index is invalid.
   * @param {number} index
   * @returns {NodeNextPrev|null}
   */
  remove(index) {
    if (this.#invalidIndex(index)) {
      return null;
    }

    if (index === 0) {
      return this.shift();
    }

    if (index === this.length - 1) {
      return this.pop();
    }

    const toRemove = this.get(index);
    const before = toRemove.prev;
    const after = toRemove.next;

    before.next = after;
    after.prev = before;

    toRemove.prev = null;
    toRemove.next = null;

    this.length--;

    return toRemove;
  }

  /**
   * Reverse the nodes of the list
   * @returns {this}
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

  toString() {
    let index = 0, current = this.head;
    const values = [current.value];

    while (index !== this.length - 1) {
      current = current.next;
      values.push(current.value);
      index++;
    }

    return values.toString();
  }

  #invalidIndex(index) {
    return index < 0 || index >= this.length;
  }
}