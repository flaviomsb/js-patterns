export default class Node<T> {
  public data: T;
  public next: Node<T> | null = null;

  public constructor(data: T) {
    this.data = data;
  }
}
