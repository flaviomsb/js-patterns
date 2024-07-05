/**
 * Read https://en.wikipedia.org/wiki/Binary_heap
 */
export class MaxBinaryHeap {
  public values: number[] = [];

  public insert(value: number) {
    this.values.push(value);
    this.bubbleUp(this.values.length - 1);
  }

  public extractMax() {
    return this.extract();
  }

  // recursively bubble up the value to maintain the max heap property
  protected bubbleUp(index: number) {
    // Base case: if the index is at the root, return
    if (index === 0) return;

    // Calculate the parent index
    const parentIndex = Math.floor((index - 1) / 2);

    // If the value at the current index is greater than the value at the parent index
    if (this.values[index] > this.values[parentIndex]) {
      this.swap(index, parentIndex);
      this.bubbleUp(parentIndex);
    }
  }

  protected sinkDown(index: number) {
    const length = this.values.length;
    const element = this.values[index];
    // Calculate the indices of the left and right children
    const leftChildIndex = 2 * index + 1;
    const rightChildIndex = 2 * index + 2;

    let swapIndex = null;

    // If the left child exists and is greater than the current element
    if (leftChildIndex < length) {
      if (this.values[leftChildIndex] > element) {
        swapIndex = leftChildIndex;
      }
    }

    // If the right child exists
    if (rightChildIndex < length) {
      // If no swapIndex yet and the right child is greater than the current element
      // or if there's a swapIndex and the right child is greater than the left child
      if (
        (swapIndex === null && this.values[rightChildIndex] > element) ||
        (swapIndex !== null &&
          this.values[rightChildIndex] > this.values[swapIndex])
      ) {
        swapIndex = rightChildIndex;
      }
    }

    // If no swap needed, return
    if (swapIndex === null) return;

    // Swap the current element with the element at swapIndex
    this.swap(index, swapIndex);
    // Recursively call sinkDown on the swapIndex
    this.sinkDown(swapIndex);
  }

  protected extract() {
    if (!this.values.length) return null;
    if (this.values.length === 1) return this.values.pop();

    const value = this.values[0];
    this.values[0] = this.values.pop() as number;
    this.sinkDown(0);

    return value;
  }

  protected swap(idx1: number, idx2: number) {
    const temp = this.values[idx1];
    this.values[idx1] = this.values[idx2];
    this.values[idx2] = temp;
  }
}
