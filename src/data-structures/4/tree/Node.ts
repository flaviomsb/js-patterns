export default class Node<T> {
  public data: T;

  public children: Array<Node<T>>;

  public constructor(data: T) {
    this.data = data;
    this.children = [];
  }

  public add(data: T) {
    this.children.push(new Node(data));

    return this;
  }

  public remove(data: T) {
    this.children = this.children.filter((node: Node<T>) => node.data !== data);
  }
}
