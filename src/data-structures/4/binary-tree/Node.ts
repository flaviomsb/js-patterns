export default class Node<T> {
  public data: T;

  public left?: Node<T>;

  public right?: Node<T>;

  public constructor(data: T) {
    this.data = data;
  }

  public insert(data: T) {
    if (data < this.data && this.left) {
      this.left.insert(data);
    } else if (data < this.data) {
      this.left = new Node(data);
    } else if (data > this.data && this.right) {
      this.right.insert(data);
    } else if (data > this.data) {
      this.right = new Node(data);
    }
  }

  public contains(data: T): Node<T> | null {
    if (data === this.data) {
      return this;
    }

    if (data > this.data && this.right) {
      return this.right.contains(data);
    } else if (data < this.data && this.left) {
      return this.left.contains(data);
    }

    return null;
  }
}