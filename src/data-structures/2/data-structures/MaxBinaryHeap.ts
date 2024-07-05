export class MaxBinaryHeap {
  public values: number[] = [];

  public insert(value: number) {
    this.values.push(value);
    this.bubbleUp(this.values.length - 1);
  }

  public extractMax() {
    if (!this.values.length) return null;
    if (this.values.length === 1) return this.values.pop();

    const max = this.values[0];
    this.values[0] = this.values.pop() as number;
    this.sinkDown(0);

    return max;
  }

  protected bubbleUp(index: number) {
    if (index === 0) return;

    const parentIndex = Math.floor((index - 1) / 2);

    if (this.values[index] > this.values[parentIndex]) {
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
      if (this.values[leftChildIndex] > element) {
        swapIndex = leftChildIndex;
      }
    }

    if (rightChildIndex < length) {
      if (
        (swapIndex === null && this.values[rightChildIndex] > element) ||
        (swapIndex !== null &&
          this.values[rightChildIndex] > this.values[swapIndex])
      ) {
        swapIndex = rightChildIndex;
      }
    }

    if (swapIndex === null) return;

    this.swap(index, swapIndex);
    this.sinkDown(swapIndex);
  }

  protected swap(idx1: number, idx2: number) {
    const temp = this.values[idx1];
    this.values[idx1] = this.values[idx2];
    this.values[idx2] = temp;
  }
}
