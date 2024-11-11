import { describe, test, expect } from '@jest/globals';
import Node from './Node';

describe('Node', () => {
  test('Node has a data and children properties', () => {
    const node = new Node('a');
    expect(node.data).toEqual('a');
    expect(node.children.length).toEqual(0);
  });

  test('Node can add children', () => {
    const node = new Node('a');
    node.add('b');
    expect(node.children.length).toEqual(1);
    expect(node.children[0].children).toEqual([]);
  });

  test('Node can remove children', () => {
    const node = new Node('a');
    node.add('b');
    expect(node.children.length).toEqual(1);
    node.remove('b');
    expect(node.children.length).toEqual(0);
  });
});
