export default class Stack<T> {
  protected data: Array<T> = [];

  public push(element: T | undefined) {
    if (element) {
      this.data.push(element);
    }
  }

  public pop(): T | undefined {
    return this.data.pop();
  }

  public peek(): T {
    return this.data[this.data.length - 1];
  }
}
