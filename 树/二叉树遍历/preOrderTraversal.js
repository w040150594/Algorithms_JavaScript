// 递归
function preOrderTraversal(root) {
  const res = [];

  const preOrderTraversalNode = (root) => {
    if (!root) return;

    res.push(root.val);
    preOrderTraversalNode(root.left);
    preOrderTraversalNode(root.right);
  };
  preOrderTraversalNode(root);

  return res;
}

// 非递归
function preOrderTraversal1(root) {
  if (!root) return [];

  const res = [];
  const stack = [];

  stack.push(root);
  while (stack.length > 0) {
    const node = stack.pop();
    res.push(node.val);

    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }

  return res;
}

