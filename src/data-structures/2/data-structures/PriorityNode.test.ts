import { describe, test, expect } from '@jest/globals';
import { PriorityLevel, PriorityNode } from './PriorityNode';

describe('PriorityNode', () => {
  test('PriorityNode is class', () => {
    expect(typeof PriorityNode.prototype.constructor).toEqual('function');
  });

  test('should hold passed data at instantiation', () => {
    const priorityNode = new PriorityNode(5, PriorityLevel.High);

    expect(priorityNode.value).toBe(5);
    expect(priorityNode.priority).toBe(0);
  });
});
