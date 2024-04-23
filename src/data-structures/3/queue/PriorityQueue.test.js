import PriorityItem from './PriorityItem';
import PriorityQueue from './PriorityQueue';

describe('PriorityQueue', () => {
  const queue = new PriorityQueue();

  test('enqueue', () => {
    queue.enqueue(
      new PriorityItem({ value: 'flush', priority: 3 }),
      new PriorityItem({ value: 'handle', priority: 1 }),
      new PriorityItem({ value: 'call', priority: 2 }),
      new PriorityItem({ value: 'process', priority: 1 }),
    );
    expect(queue.size()).toBe(4);
    expect(queue.toString()).toEqual(
      // eslint-disable-next-line max-len
      '{"value":"handle","priority":1},{"value":"process","priority":1},{"value":"call","priority":2},{"value":"flush","priority":3}',
    );
  });

  test('enqueue must throw an exception at non priority item', () => {
    expect(() => queue.enqueue('Austin')).toThrow(
      'cannot read priority from item: Austin',
    );
  });
});
