import { describe, test, expect } from '@jest/globals';
import QueueStack from './QueueStack';

describe('QueueStack', () => {
  test('Queue is a class', () => {
    expect(typeof QueueStack.prototype.constructor).toEqual('function');
  });

  test('can add elements to a queue', () => {
    const q = new QueueStack();
    expect(() => {
      q.add(1);
    }).not.toThrow();
  });

  test('can remove elements from a queue', () => {
    const q = new QueueStack();
    expect(() => {
      q.add(1);
      q.remove();
    }).not.toThrow();
  });

  test('Order of elements is maintained', () => {
    const q = new QueueStack();
    q.add(1);
    q.add(2);
    q.add(3);
    expect(q.remove()).toEqual(1);
    expect(q.remove()).toEqual(2);
    expect(q.remove()).toEqual(3);
    expect(q.remove()).toEqual(undefined);
  });

  test('peek returns, but does not remove, the first value', () => {
    const q = new QueueStack();
    q.add(1);
    q.add(2);
    expect(q.peek()).toEqual(1);
    expect(q.peek()).toEqual(1);
    expect(q.remove()).toEqual(1);
    expect(q.remove()).toEqual(2);
  });
});
