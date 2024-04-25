import { BNodeNum } from "../common/bst";
import { QueueNum, Queue } from "../common/queue";


/** bfs(): Traverse the BST using BFS.
 * Returns an array of visited nodes. */


function bfs(node: BNodeNum | null): number[] {
  let toVisit = new Queue<BNodeNum>();
  let vals: number[] = [];

  if (node) toVisit.enqueue(node);

  while (!toVisit.isEmpty()) {
    let current = toVisit.dequeue();
    vals.push(current.val);

    if (current.left) toVisit.enqueue(current.left);
    if (current.right) toVisit.enqueue(current.right);
  }

  return vals;
}

export { bfs };