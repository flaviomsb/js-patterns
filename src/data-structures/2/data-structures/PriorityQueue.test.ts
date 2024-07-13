import { PriorityLevel, PriorityNode } from './PriorityNode';
import { PriorityQueue } from './PriorityQueue';

describe('PriorityQueue', () => {
  test('PriorityQueue is class', () => {
    expect(typeof PriorityQueue.prototype.constructor).toEqual('function');
  });

  test('should insert and allocate node in the right order', () => {
    const queue = new PriorityQueue();

    queue.insert(120, PriorityLevel.Low);
    queue.insert(239.76, PriorityLevel.High);
    queue.insert(32, PriorityLevel.Medium);

    expect(queue.nodes).toMatchObject(expect.arrayContaining([
      new PriorityNode(239.76, PriorityLevel.High),
      new PriorityNode(120, PriorityLevel.Low),
      new PriorityNode(32, PriorityLevel.Medium),
    ]));
  });

  test('should extract according to the priority level', () => {
    const queue = new PriorityQueue();

    expect(queue.extract()).toBeNull();

    queue.insert(120, PriorityLevel.Low);
    queue.insert(239.76, PriorityLevel.High);
    queue.insert(32, PriorityLevel.Medium);

    expect(queue.extract()).toMatchObject(new PriorityNode(239.76, PriorityLevel.High));
    expect(queue.extract()).toMatchObject(new PriorityNode(32, PriorityLevel.Medium));
    expect(queue.extract()).toMatchObject(new PriorityNode(120, PriorityLevel.Low));
  });
});
