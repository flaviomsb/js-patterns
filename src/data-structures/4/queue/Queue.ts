export default class Queue<T> {
  protected data: Array<T> = [];

  public add(element: T | undefined) {
    if (element) {
      this.data.unshift(element);
    }
  }

  public remove(): T | undefined {
    return this.data.pop();
  }

  public peek(): T {
    return this.data[this.data.length - 1];
  }
}
