//递归
function inOrderTraversal(root) {
  const res = [];

  const inOrderTraversalNode = (root) => {
    if (!root) return;

    inOrderTraversalNode(root.left);
    res.push(root.val);
    inOrderTraversalNode(root.right);
  };
  inOrderTraversalNode(root);

  return res;
}

//非递归
function inOrderTraversal1(root) {
  if (!root) return [];

  const res = [];
  const stack = [];

  while (stack.length > 0 || root) {
    while (root) {
      stack.push(root);
      root = root.left;
    }

    const node = stack.pop();
    res.push(node.val);
    root = node.right;
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
console.log(inOrderTraversal(root)); // [2, 1, 4, 3, 5]
console.log(inOrderTraversal1(root)); // [2, 1, 4, 3, 5]
