export class TreeNode {
  public value!: number;

  public left: TreeNode | null = null;

  public right: TreeNode | null = null;

  public constructor(value: number) {
    this.value = value;
  }
}