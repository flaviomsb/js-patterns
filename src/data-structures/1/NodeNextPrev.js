import Node from './Node';

class NodeNextPrev extends Node {
  constructor(value) {
    super(value);
    this.next = null;
    this.prev = null;
  }
}

export default NodeNextPrev;
