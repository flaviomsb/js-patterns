import { MaxBinaryHeap } from './MaxBinaryHeap';

export class MinBinaryHeap extends MaxBinaryHeap {
  public extractMin() {
    return this.extract();
  }

  protected bubbleUp(index: number) {
    if (index === 0) return;

    const parentIndex = Math.floor((index - 1) / 2);

    if (this.values[index] < this.values[parentIndex]) {
      this.swap(index, parentIndex);
      this.bubbleUp(parentIndex);
    }
  }

  protected sinkDown(index: number) {
    const length = this.values.length;
    const element = this.values[index];
    const leftChildIndex = 2 * index + 1;
    const rightChildIndex = 2 * index + 2;

    let swapIndex = null;

    if (leftChildIndex < length) {
      if (this.values[leftChildIndex] < element) {
        swapIndex = leftChildIndex;
      }
    }

    if (rightChildIndex < length) {
      if (
        (swapIndex === null && this.values[rightChildIndex] < element) ||
        (swapIndex !== null &&
          this.values[rightChildIndex] < this.values[swapIndex])
      ) {
        swapIndex = rightChildIndex;
      }
    }

    if (swapIndex === null) return;

    this.swap(index, swapIndex);
    this.sinkDown(swapIndex);
  }
}
