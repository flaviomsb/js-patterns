import Node from './Node';
import Tree from './Tree';

describe('Tree', () => {
  test('starts empty', () => {
    const tree = new Tree();
    expect(tree.root).toEqual(null);
  });

  test('can traverse breadth first', () => {
    const letters: Array<string> = [];
    const tree = new Tree<string>();
    tree.root = new Node('a');
    tree.root.add('b');
    tree.root.add('c');
    tree.root.children[0].add('d');

    tree.traverseBF(node => {
      letters.push(node.data);
    });

    expect(letters).toEqual(['a', 'b', 'c', 'd']);
  });

  test('Can traverse DF', () => {
    const letters: Array<string> = [];
    const tree = new Tree<string>();
    tree.root = new Node('a');
    tree.root.add('b');
    tree.root.add('d');
    tree.root.children[0].add('c');

    tree.traverseDF(node => {
      letters.push(node.data);
    });

    expect(letters).toEqual(['a', 'b', 'c', 'd']);
  });
});
