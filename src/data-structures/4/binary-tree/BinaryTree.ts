import Node from './Node';

export default class BinaryTree<T> {
  public root: Node<T> | null;

  public constructor() {
    this.root = null;
  }
}