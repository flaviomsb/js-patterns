import NodeLeftRight from './NodeLeftRight';

class BsTree {
  constructor() {
    this.root = null;
  }

  /**
   * Insert a new node into the tree
   * @param {*} value
   * @returns {(BsTree|undefined)}
   */
  insert(value) {
    const newNode = new NodeLeftRight(value);

    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    let temp = this.root;
    // eslint-disable-next-line no-constant-condition
    while (true) {
      if (newNode.value === temp.value) return undefined;
      if (newNode.value < temp.value) { // check if go left
        if (temp.left === null) { // if node does not exists then create it
          temp.left = newNode;
          return this;
        }

        temp = temp.left; // otherwise, keep going left
      } else { // then go to the right
        if (temp.right === null) { // if node does not exists then create it
          temp.right = newNode;
          return this;
        }

        temp = temp.right; // otherwise, keep going right
      }
    }
  }

  /**
   * Check if passed value exists in the tree
   * @param {*} value
   * @returns {boolean}
   */
  contains(value) {
    if (this.root === null) return false;

    let temp = this.root;

    while (temp) {
      if (value < temp.value) {
        temp = temp.left;
      } else if (value > temp.value) {
        temp = temp.right;
      } else {
        return true;
      }
    }

    return false;
  }

  /**
   * Return the node with minimum value for the given current node
   * @param {NodeLeftRight} current
   * @returns {NodeLeftRight}
   */
  min(current = null) {
    let node = current ?? this.root;

    while (node.left != null) {
      node = node.left;
    }

    return node;
  }

  /**
   * Insert multiple values into the tree
   * @param {Array} values
   * @returns {BsTree}
   */
  static fromValues(...values) {
    const tree = new BsTree();
    values.forEach((val) => tree.insert(val));
    return tree;
  }
}

export default BsTree;
