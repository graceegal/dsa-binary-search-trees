import { BNodeNum } from "../common/bst";
import { StackNum } from "../common/stack";

/** findRecursively(val): Search from the invoking node for a node with value val.
 * Returns the node, if found; else null */

function findRecursively(node: BNodeNum | null, val: number): BNodeNum | null {
  if (!node) return null;
  let current = node;

  if (current!.val === val) return current;

  if (val < current!.val) {
    return findRecursively(current.left, val);
  } else {
    return findRecursively(current.right, val);
  }

}

/** find(val): Search the BST for a node with value val.
 * Returns the node, if found; else null. */

function find(node: BNodeNum | null, val: number): BNodeNum | null {
  let current = node;

  while (current) {
    if (current.val === val) return current;

    current = val < current.val ? current.left : current.right;
  }
  return null;
}

export { findRecursively, find };
