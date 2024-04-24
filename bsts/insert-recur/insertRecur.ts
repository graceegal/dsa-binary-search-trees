import { BSTNum, BNodeNum } from "../common/bst";

/** insertRecursively(val): Insert a new node into the BST with value val.
 * Uses recursion. */

function insertRecur(bst: BSTNum, val: number): void {
  const newNode = new BNodeNum(val);

  // if root is null, insert first node with null left and right values
  if (bst.root === null) {
    bst.root = newNode;
    return;
  } else {
    _checkRecur(bst.root);
  }

  // new insert
  // if insert.val is > root.val put on right, otherwise put on left
  function _checkRecur(node: BNodeNum) {
    if (newNode.val < node.val) {
      if (node.left) {
        node = node.left;
        _checkRecur(node);
      } else {
        node.left = newNode;
        return;
      }
    } else {
      if (node.right) {
        node = node.right;
        _checkRecur(node);
      } else {
        node.right = newNode;
        return;
      }
    }
  }
}
export { insertRecur };

