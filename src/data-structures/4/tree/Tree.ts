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

  public levelWidth(): Array<number> {
    const arr = [this.root, 's'];
    const counters = [0];

    while (arr.length > 1) {
      const node = arr.shift();

      if (node) {
        if (typeof node === 'string' && node === 's') {
          counters.push(0);
          arr.push('s');
        } else if (node instanceof Node) {
          arr.push(...node.children);
          counters[counters.length - 1]++;
        }
      }
    }

    return counters;
  }
}
