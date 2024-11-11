import { describe, test, expect } from '@jest/globals';
import Queue from './Queue';
import NodeNext from './NodeNext';

describe('Queue', () => {
  describe('constructor', () => {
    test('when no value is passed', () => {
      const queue = new Queue();

      expect(queue.first).toBeNull();
      expect(queue.last).toBeNull();
      expect(queue.length).toBe(0);
    });

    test('when a non array value is passed', () => {
      const queue = new Queue(5);

      expect(queue.first).toBeInstanceOf(NodeNext);
      expect(queue.last).toBeInstanceOf(NodeNext);
      expect(queue.length).toBe(1);
    });
  });

  describe('queue', () => {
    test('pushing new value to the queue', () => {
      const queue = new Queue();
      queue.enqueue('Austin');
      queue.enqueue('Hunt');

      expect(queue.length).toBe(2);
      expect(queue.enqueue('Dallas').length).toBe(3);
    });
  });

  describe('dequeue', () => {
    const queue = Queue.fromValues('batch #1', 'batch #2', 'batch #3');

    test.each([
      ['batch #1', 2],
      ['batch #2', 1],
      ['batch #3', 0],
    ])('dequeueing %s and expected new length %s', (value, newLength) => {
      expect(queue.dequeue()).toMatchObject({ value });
      expect(queue.length).toBe(newLength);
    });

    test('dequeueing from an empty queue', () => {
      expect(queue.length).toBe(0);
      expect(queue.dequeue()).toBeUndefined();
    });
  });
});
