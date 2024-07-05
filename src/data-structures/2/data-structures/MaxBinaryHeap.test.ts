import { MaxBinaryHeap } from './MaxBinaryHeap';

describe('MaxBinaryHeap', () => {
  test('should insert values in the expected order', () => {
    const heap = new MaxBinaryHeap();

    heap.insert(23);
    heap.insert(43);
    heap.insert(2);
    heap.insert(89);
    heap.insert(14);
    heap.insert(31);

    expect(heap.values).toMatchObject([89, 43, 31, 23, 14, 2]);
  });

  test('should extract max', () => {
    const heap = new MaxBinaryHeap();

    heap.insert(23);
    heap.insert(43);
    heap.insert(2);
    heap.insert(89);
    heap.insert(14);
    heap.insert(31);

    expect(heap.extractMax()).toBe(89);
    expect(heap.values).toMatchObject([43, 23, 31, 2, 14]);
  });
});
