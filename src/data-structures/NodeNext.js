import Node from './Node';

class NodeNext extends Node {
  constructor(value) {
    super(value);
    this.next = null;
  }
}

export default NodeNext;
