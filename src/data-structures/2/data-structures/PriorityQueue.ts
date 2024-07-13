import { PriorityLevel, PriorityNode } from './PriorityNode';

export class PriorityQueue {
  public nodes: PriorityNode[] = [];

  public insert(value: number, priority: PriorityLevel): void {
    const node = new PriorityNode(value, priority);
    this.nodes.push(node);
    this.bubbleUp(this.nodes.length - 1);
  }

  public extract(): PriorityNode | null {
    if (this.nodes.length === 0) return null;
    if (this.nodes.length === 1) return this.nodes.pop()!;

    const min = this.nodes[0];
    this.nodes[0] = this.nodes.pop()!;
    this.sinkDown(0);
    return min;
  }

  protected bubbleUp(index: number): void {
    if (index === 0) return;

    const parentIndex = Math.floor((index - 1) / 2);
    if (this.nodes[index].priority < this.nodes[parentIndex].priority) {
      this.swap(index, parentIndex);
      this.bubbleUp(parentIndex);
    }
  }

  protected swap(index1: number, index2: number) {
    const temp = this.nodes[index1];
    this.nodes[index1] = this.nodes[index2];
    this.nodes[index2] = temp;
  }

  // Helper method to recursively sink down the value to maintain the min heap property
  protected sinkDown(index: number): void {
    const length = this.nodes.length;
    const element = this.nodes[index];
    const leftChildIndex = 2 * index + 1;
    const rightChildIndex = 2 * index + 2;

    let swapIndex: number | null = null;

    if (leftChildIndex < length) {
      if (this.nodes[leftChildIndex].priority < element.priority) {
        swapIndex = leftChildIndex;
      }
    }

    if (rightChildIndex < length) {
      if (
        (swapIndex === null && this.nodes[rightChildIndex].priority < element.priority) ||
        (swapIndex !== null && this.nodes[rightChildIndex].priority < this.nodes[swapIndex].priority)
      ) {
        swapIndex = rightChildIndex;
      }
    }

    if (swapIndex === null) return;

    this.swap(index, swapIndex);
    this.sinkDown(swapIndex);
  }
}
