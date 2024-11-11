import { describe, test, expect } from '@jest/globals';
import Node from './Node';

describe('Binary Tree', () => {
  test('node can insert correctly', () => {
    const node = new Node(10);
    node.insert(5);
    node.insert(15);
    node.insert(17);

    expect(node.left?.data).toEqual(5);
    expect(node.right?.data).toEqual(15);
    expect(node.right?.right?.data).toEqual(17);
  });

  test('contains returns node with the same data', () => {
    const node = new Node(10);
    node.insert(5);
    node.insert(15);
    node.insert(20);
    node.insert(0);
    node.insert(-5);
    node.insert(3);

    const three = node.left?.left?.right;
    expect(node.contains(3)).toEqual(three);
  });

  test('contains returns null if value not found', () => {
    const node = new Node(10);
    node.insert(5);
    node.insert(15);
    node.insert(20);
    node.insert(0);
    node.insert(-5);
    node.insert(3);

    expect(node.contains(9999)).toEqual(null);
  });
});
