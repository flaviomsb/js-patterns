import Stack from '../stack/Stack';

export default class QueueStack<T> {
  protected temp = new Stack<T>();

  protected results = new Stack<T>();

  public add(element: T) {
    this.temp.push(element);
  }

  public remove(): T | undefined {
    while (this.temp.peek()) {
      this.results.push(this.temp.pop());
    }

    const el = this.results.pop();

    while (this.results.peek()) {
      this.temp.push(this.results.pop());
    }

    return el;
  }

  public peek(): T {
    while (this.temp.peek()) {
      this.results.push(this.temp.pop());
    }

    const el = this.results.peek();

    while (this.results.peek()) {
      this.temp.push(this.results.pop());
    }

    return el;
  }
}
