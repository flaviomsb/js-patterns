import { TreeNode } from './TreeNode';

export class BinarySearchTree {
  public root: TreeNode | null = null;

  public insert(value: number): void {
    const node = new TreeNode(value);

    if (!this.root) {
      this.root = node;
    } else {
      this.insertNode(this.root, node);
    }
  }

  public contains(value: number): boolean {
    return this.containsValue(this.root, value);
  }

  public breadthFirstSearch(): (TreeNode | null)[] {
    let node = this.root;
    const queue = [];
    const result = [];
    queue.push(node);

    while (queue.length) {
      node = queue.shift() as TreeNode | null;
      result.push(node);

      if (node?.left) {
        queue.push(node.left);
      }

      if (node?.right) {
        queue.push(node.right);
      }
    }

    return result;
  }

  protected insertNode(current: TreeNode, newNode: TreeNode): void {
    if (newNode.value < current.value) {
      if (!current.left) {
        current.left = newNode;
      } else {
        this.insertNode(current.left, newNode);
      }
    } else {
      if (!current.right) {
        current.right = newNode;
      } else {
        this.insertNode(current.right, newNode);
      }
    }
  }

  protected containsValue(current: TreeNode | null, value: number): boolean {
    if (!current) {
      return false;
    }

    if (value < current.value) {
      return this.containsValue(current.left, value);
    } else if (value > current.value) {
      return this.containsValue(current.right, value);
    } else {
      return true;
    }
  }
}