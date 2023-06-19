import Node from './Node';

export default class LinkedList<T> {
  public head: Node<T> | null = null;

  public getAt(index: number): Node<T> | null {
    let count = 0;
    let node = this.head;

    while (node) {
      if (count === index) {
        return node;
      }

      count++;
      node = node.next;
    }

    return null;
  }

  public getFirst(): Node<T> | null {
    return this.getAt(0);
  }

  public getLast(): Node<T> | null {
    return this.getAt(this.size() - 1);
  }

  public insertAt(data: T, index: number): void {
    const node = new Node(data);

    if (!this.head) {
      this.head = node;
      return;
    }

    if (index === 0) {
      node.next = this.head;
      this.head = node;
      return;
    }

    const previous = this.getAt(index - 1) || this.getLast();
    if (previous) {
      node.next = previous.next;
      previous.next = node;
    }
  }

  public insertFirst(data: T): void {
    this.insertAt(data, 0);
  }

  public insertLast(data: T): void {
    const last = this.getLast();

    if (last) {
      last.next = new Node(data);
    } else {
      this.insertFirst(data);
    }
  }

  public removeAt(index: number): void {
    if (!this.head) {
      return;
    }

    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    const previous = this.getAt(index - 1);
    if (!previous || !previous.next) {
      return;
    }

    previous.next = previous.next.next;
  }

  public removeFirst(): void {
    this.removeAt(0);
  }

  public removeLast(): void {
    this.removeAt(this.size() - 1);
  }

  public size(): number {
    let count = 0;
    let node = this.getFirst();

    while (node) {
      count++;
      node = node.next;
    }

    return count;
  }

  public clear(): void {
    this.head = null;
  }

  public forEach(callback: (node: Node<T>, index: number) => void) {
    let index = 0;
    let node = this.head;

    while (node) {
      callback(node, index);
      index++;
      node = node.next;
    }
  }

  public *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }
}
