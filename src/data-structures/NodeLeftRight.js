import Node from './Node';

class NodeLeftRight extends Node {
  constructor(value) {
    super(value);
    this.left = null;
    this.right = null;
  }
}

export default NodeLeftRight;
