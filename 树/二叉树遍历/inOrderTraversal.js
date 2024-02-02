//递归
function preOrderTraversal(root) {
  const res = [];

  const preOrderTraversalNode = (root) => {
    if (!root) return;

    preOrderTraversalNode(root.left);
    res.push(root.val);
    preOrderTraversalNode(root.right);
  };
  preOrderTraversalNode(root);

  return res;
}

//非递归
function preOrderTraversal1(root) {
  if (!root) return [];

  const res = [];
  const stack = [];

  let cur = root;
  while (stack.length > 0 || cur) {
    while (cur) {
      stack.push(cur);
      cur = cur.left;
    }

    const node = stack.pop();
    res.push(node.val);
    cur = node.right;
  }

  return res;
}