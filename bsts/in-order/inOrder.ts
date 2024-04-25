import { BNodeNum } from "../common/bst";

/** inOrder(): Traverse from the invoking node using in-order DFS.
 * Returns an array of visited nodes. */

function inOrder(node: BNodeNum | null): number[] {
  if (!node) return [];

  const values = [];

  if (node.left) {
    values.push(...inOrder(node.left));
  }
  values.push(node.val);
  if (node.right) {
    values.push(...inOrder(node.right));
  }

  return values;
}



/** inOrderAccum(): Traverse the BST using in-order DFS.
 * Returns an array of visited nodes.
 * Uses an "accumulator"
 */

function inOrderAccum(
  node: BNodeNum | null = null,
  accum: number[] = []): number[] {
  return [42];
}


export { inOrder, inOrderAccum };
