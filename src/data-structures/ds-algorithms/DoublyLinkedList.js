import LinkedList from './LinkedList';
import NodeNextPrev from './NodeNextPrev';

class DoublyLinkedList extends LinkedList {
  /**
   * Push new node to the end of the list
   * @param {*} value
   * @returns {DoublyLinkedList}
   */
  push(value) {
    const newNode = new NodeNextPrev(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length++;

    return this;
  }

  /**
  * Remove the last node from the list
  * @returns {(NodeNextPrev|undefined)}
  */
  pop() {
    if (!this.head) return undefined;

    const toPop = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = toPop.prev;
      this.tail.next = null;
      toPop.prev = null;
    }

    this.length--;

    return toPop;
  }

  /**
   * Add a new node to the beginning of the list
   * @param {*} value
   * @returns {LinkedList}
   */
  unshift(value) {
    const node = new NodeNextPrev(value);

    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }

    this.length++;

    return this;
  }

  /**
   * Remove the first node from the beginning of the list
   * @returns {(NodeNextPrev|undefined)}
   */
  shift() {
    if (!this.head) return undefined;

    const toRemove = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
      toRemove.next = null;
    }

    this.length--;

    return toRemove;
  }

  /**
  * Return the node for the given index number
  * @param {number} index
  * @returns {(NodeNextPrev|undefined)}
  * @throws {Error}
  */
  get(index) {
    this.validateIndex(index);

    if (index < this.length / 2) {
      return super.get(index);
    }

    let node = this.tail;
    for (let i = this.length - 1; i > index; i--) {
      node = node.prev;
    }

    return node;
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

    const newNode = new NodeNextPrev(value);
    const before = this.get(index - 1);
    const after = before.next;
    before.next = newNode;
    newNode.prev = before;
    newNode.next = after;
    after.prev = newNode;
    this.length++;

    return this;
  }

  /**
   * Remove the node for the given index number
   * @param {number} index
   * @returns {(NodeNextPrev|undefined)}
   * @throws {Error}
   */
  remove(index) {
    this.validateIndex(index);

    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    const toRemove = this.get(index);
    toRemove.prev.next = toRemove.next;
    toRemove.next.prev = toRemove.prev;
    toRemove.next = null;
    toRemove.prev = null;
    this.length--;

    return toRemove;
  }

  /**
   * Return new instace of list class
   * @returns {DoublyLinkedList}
   */
  static createInstance() {
    return new DoublyLinkedList();
  }
}

export default DoublyLinkedList;
