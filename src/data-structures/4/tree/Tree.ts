import Node from './Node';

export default class Tree<T> {
  public root: Node<T> | null;

  public constructor() {
    this.root = null;
  }

  public traverseBF(fn: (node: Node<T>) => void) {
    const nodes = [this.root];

    while (nodes.length) {
      const node = nodes.shift();

      if (node) {
        nodes.push(...node.children);
        fn(node);
      }
    }
  }

  public traverseDF(fn: (node: Node<T>) => void) {
    const nodes = [this.root];

    while (nodes.length) {
      const node = nodes.shift();

      if (node) {
        nodes.unshift(...node.children);
        fn(node);
      }
    }
  }
}
