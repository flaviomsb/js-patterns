export default class Node<T> {
  public constructor(protected _data: T, protected _next: Node<T> | null = null) {}

  public get data(): T {
    return this._data;
  }

  public get next(): Node<T> | null {
    return this._next;
  }
}
