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
// 测试
const root = {
  val: 1,
  left: {
    val: 2,
    left: null,
    right: null,
  },
  right: {
    val: 3,
    left: {
      val: 4,
      left: null,
      right: null,
    },
    right: {
      val: 5,
      left: null,
      right: null,
    },
  },
};
console.log(preOrderTraversal(root)); // [1, 2, 3, 4, 5]
