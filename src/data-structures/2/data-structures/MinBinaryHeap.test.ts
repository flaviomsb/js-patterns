import { MinBinaryHeap } from './MinBinaryHeap';

describe('MinBinaryHeap', () => {
  test('should insert values in the expected order', () => {
    const heap = new MinBinaryHeap();

    heap.insert(23);
    heap.insert(43);
    heap.insert(2);
    heap.insert(89);
    heap.insert(14);
    heap.insert(31);

    expect(heap.values).toMatchObject([2, 14, 23, 89, 43, 31]);
  });

  test('should extract min', () => {
    const heap = new MinBinaryHeap();

    heap.insert(23);
    heap.insert(43);
    heap.insert(2);
    heap.insert(89);
    heap.insert(14);
    heap.insert(31);

    expect(heap.extractMin()).toBe(2);
    expect(heap.values).toMatchObject([14, 31, 23, 89, 43]);
  });
});
