import { describe, test, expect } from '@jest/globals';
import BsTree from './BsTree';

describe('Binary Search Tree', () => {
  test('constructor', () => {
    const tree = new BsTree();
    expect(tree.root).toBeNull();
  });

  describe('insert', () => {
    test('when tree is empty', () => {
      const tree = new BsTree();
      tree.insert(10);
      expect(tree.root).toMatchObject({
        value: 10,
        right: null,
        left: null,
      });
    });

    test('when value already exists, no duplicates allowed', () => {
      const tree = new BsTree();
      tree.insert(10);
      tree.insert(7);
      tree.insert(12);

      expect(tree.insert(12)).toBeUndefined();
      expect(tree).toMatchObject({
        root: {
          value: 10,
          left: {
            value: 7,
          },
          right: {
            value: 12,
          },
        },
      });
    });

    test('when tree is complete', () => {
      const tree = new BsTree();
      tree.insert(10);
      tree.insert(7);
      tree.insert(12);

      expect(tree.insert(9)).toMatchObject({
        root: {
          value: 10,
          left: {
            value: 7,
            right: {
              value: 9,
            },
          },
        },
      });
    });
  });

  describe('contains', () => {
    test('when tree is empty', () => {
      const tree = new BsTree();
      expect(tree.contains(2)).toBeFalsy();
    });

    test('when tree is not empty', () => {
      const tree = BsTree.fromValues(23, 32, 42, 3, 12, 78, 23, 15);

      expect(tree.contains(5)).toBeFalsy();
      expect(tree.contains(78)).toBeTruthy();
    });
  });

  describe('min', () => {
    test('when tree has only one node, root must be the mininum value', () => {
      const tree = new BsTree();
      tree.insert(15);
      expect(tree.min()).toMatchObject(tree.root);
    });

    test('when tree many nodes', () => {
      const tree = BsTree.fromValues(46, 28, 48, 12, 4, 5, 90);

      expect(tree.min()).toMatchObject({ value: 4 });
    });

    test('when a current node is passed', () => {
      const tree = BsTree.fromValues(9, 43, 89, 23, 1, 25, 7);

      expect(tree.min(tree.root.right)).toMatchObject({ value: 23 });
    });
  });

  describe('Tree traversal', () => {
    const tree = BsTree.fromValues(47, 21, 76, 18, 27, 52, 82);

    test('breadth first search', () => {
      expect(tree.bfs()).toMatchObject([47, 21, 76, 18, 27, 52, 82]);
    });

    test('Depth first search - pre order', () => {
      expect(tree.dfsPreOrder()).toMatchObject([47, 21, 18, 27, 76, 52, 82]);
    });

    test('Depth first search - post order', () => {
      expect(tree.dfsPostOrder()).toMatchObject([18, 27, 21, 52, 82, 76, 47]);
    });

    test('Depth first search - in order', () => {
      expect(tree.dfsInOrder()).toMatchObject([18, 21, 27, 47, 52, 76, 82]);
    });
  });
});
