// 递归
function postOrderTraversal(root) {
  const res = [];

  const postOrderTraversalNode = (root) => {
    if (!root) return;

    postOrderTraversalNode(root.left);
    postOrderTraversalNode(root.right);
    res.push(root.val);
  };
  postOrderTraversalNode(root);

  return res;
}
// 非递归
function postOrderTraversal(root) {
  if (!root) return [];
  const res = [];
  const stack = [];

  stack.push(root);
  while (stack.length > 0) {
    const node = stack.pop();
    res.push(node.val);

    if (node.left) stack.push(node.left);
    if (node.right) stack.push(node.right);
  }

  return res.reverse();
}