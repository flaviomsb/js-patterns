import { TreeNode } from './TreeNode';

export type BSTNode = TreeNode | null;

enum DepthFirstSearchType {
  PreOrder,
  PostOrder,
  InOrder,
}

export class BinarySearchTree {
  public root: BSTNode = null;

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

  public breadthFirstSearch(): BSTNode[] {
    let node = this.root;
    const queue = [];
    const result: BSTNode[] = [];
    queue.push(node);

    while (queue.length) {
      node = queue.shift() as BSTNode;
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

  public depthFirstSearchPreOrder() {
    return this.runDepthFirstSearchType(DepthFirstSearchType.PreOrder);
  }

  public depthFirstSearchPostOrder() {
    return this.runDepthFirstSearchType(DepthFirstSearchType.PostOrder);
  }

  public depthFirstSearchInOrder() {
    return this.runDepthFirstSearchType(DepthFirstSearchType.InOrder);
  }

  protected runDepthFirstSearchType(type: DepthFirstSearchType) {
    const result: BSTNode[] = [];

    function traverse(node: BSTNode) {
      if (type === DepthFirstSearchType.PreOrder) {
        result.push(node);
        if (node?.left) traverse(node.left);
        if (node?.right) traverse(node.right);
      } else if (type === DepthFirstSearchType.PostOrder) {
        if (node?.left) traverse(node.left);
        if (node?.right) traverse(node.right);
        result.push(node);
      } else if (type === DepthFirstSearchType.InOrder) {
        if (node?.left) traverse(node.left);
        result.push(node);
        if (node?.right) traverse(node.right);
      } else {
        throw new Error('Invalid depth first search type');
      }
    }

    traverse(this.root);

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

  protected containsValue(current: BSTNode, value: number): boolean {
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