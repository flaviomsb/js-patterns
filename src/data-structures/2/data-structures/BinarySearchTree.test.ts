import { BinarySearchTree, BSTNode } from './BinarySearchTree';
import { TreeNode } from './TreeNode';

describe('BinarySearchTree', () => {
  test('constructor', () => {
    const bst = new BinarySearchTree();

    expect(bst.root).toBeNull();
  });

  test('should add the first node as root', () => {
    const bst = new BinarySearchTree();
    bst.insert(10);

    expect(bst.root).toBeInstanceOf(TreeNode);
    expect(bst.root?.value).toBe(10);
  });

  test('should add nodes in the expected order', () => {
    const bst = new BinarySearchTree();

    bst.insert(20);
    bst.insert(21);
    bst.insert(3);
    bst.insert(87);
    bst.insert(0.5);

    expect(bst.root?.value).toBe(20);
    expect(bst.root?.left?.value).toBe(3);
    expect(bst.root?.left?.left?.value).toBe(0.5);
    expect(bst.root?.left?.right).toBeNull();
    expect(bst.root?.right?.value).toBe(21);
    expect(bst.root?.right?.right?.value).toBe(87);
    expect(bst.root?.right?.left).toBeNull();

    bst.insert(4);

    expect(bst.root?.left?.right?.value).toBe(4);

    bst.insert(20.5);

    expect(bst.root?.right?.left?.value).toBe(20.5);
  });

  test('should return false when contains is called on an empty tree', () => {
    const bst = new BinarySearchTree();

    expect(bst.contains(10)).toBeFalsy();
  });

  test('should return a boolean when contains is called on a valid tree', () => {
    const bst = new BinarySearchTree();

    bst.insert(35);
    bst.insert(21);
    bst.insert(5);
    bst.insert(92);
    bst.insert(1);

    expect(bst.contains(6)).toBeFalsy();
    expect(bst.contains(92)).toBeTruthy();
  });

  describe('tree traversal', () => {
    const bst = new BinarySearchTree();

    bst.insert(35);
    bst.insert(21);
    bst.insert(5);
    bst.insert(92);
    bst.insert(1);
    bst.insert(101);
    bst.insert(49);

    test.each([
      ['breadth first search', bst.breadthFirstSearch(), [35, 21, 92, 5, 49, 101, 1]],
      ['depth first search pre-order', bst.depthFirstSearchPreOrder(), [35, 21, 5, 1, 92, 49, 101]],
      ['depth first search post-order', bst.depthFirstSearchPostOrder(), [1, 5, 21, 49, 101, 92, 35]],
      ['depth first search in-order', bst.depthFirstSearchInOrder(), [1, 5, 21, 35, 49, 92, 101]],
    ])('should return the expected %s result', (_, traversal: BSTNode[], expectedTraversal: number[]) => {
      const bfs = traversal.map(item => item?.value);

      expect(bfs).toMatchObject(expectedTraversal);
    });
  });
});
