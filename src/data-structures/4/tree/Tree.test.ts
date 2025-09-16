import { describe, test, expect } from '@jest/globals';
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

    tree.traverseBF((node) => {
      letters.push(node.data);
    });

    expect(letters).toEqual(['a', 'b', 'c', 'd']);
  });

  test('can traverse DF', () => {
    const letters: Array<string> = [];
    const tree = new Tree<string>();
    tree.root = new Node('a');
    tree.root.add('b');
    tree.root.add('d');
    tree.root.children[0].add('c');

    tree.traverseDF((node) => {
      letters.push(node.data);
    });

    expect(letters).toEqual(['a', 'b', 'c', 'd']);
  });

  test('levelWidth returns number of nodes at widest point', () => {
    const root = new Node(0);
    root.add(1);
    root.add(2);
    root.add(3);
    root.children[0].add(4);
    root.children[2].add(5);

    const tree = new Tree<number>();
    tree.root = root;

    expect(tree.levelWidth()).toEqual([1, 3, 2]);
  });

  test('levelWidth returns number of nodes added to root and to only one child', () => {
    const root = new Node(0);
    root.add(1);
    root.children[0].add(2);
    root.children[0].add(3);
    root.children[0].children[0].add(4);

    const tree = new Tree<number>();
    tree.root = root;

    expect(tree.levelWidth()).toEqual([1, 1, 2, 1]);
  });
});
