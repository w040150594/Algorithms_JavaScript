// 给定一个二叉搜索树的根节点 root 和一个值 key，删除二叉搜索树中的 key 对应的节点，并保证二叉搜索树的性质不变。返回二叉搜索树（有可能被更新）的根节点的引用。

// 一般来说，删除节点可分为两个步骤：

// 首先找到需要删除的节点；
// 如果找到了，删除它。

// 示例 1:

// 输入：root = [5,3,6,2,4,null,7], key = 3
// 输出：[5,4,6,2,null,null,7]
// 解释：给定需要删除的节点值是 3，所以我们首先找到 3 这个节点，然后删除它。
// 一个正确的答案是 [5,4,6,2,null,null,7], 如下图所示。
// 另一个正确答案是 [5,2,6,null,4,null,7]。

// 示例 2:

// 输入: root = [5,3,6,2,4,null,7], key = 0
// 输出: [5,3,6,2,4,null,7]
// 解释: 二叉树不包含值为 0 的节点
// 示例 3:

// 输入: root = [], key = 0
// 输出: []

// 函数含义：删除二叉搜索树中的 key 对应的节点
const deleteNode = function (root, key) {
  // if (root == null) return null;

  // if (root.val == key) {
  //   // 1.没有节点
  //   if (root.left == null && root.right == null) return null;
  //   // 2.只有一个节点
  //   if (root.left == null) return root.right;
  //   if (root.right == null) return root.left;

  //   // 3.有两个节点
  //   // 获得右子树最小的节点
  //   let minNode = getMin(root.right);
  //   // 删除右子树最小的节点
  //   root.right = deleteNode(root.right, minNode.val);
  //   // 用右子树最小的节点替换 root 节点
  //   minNode.left = root.left;
  //   minNode.right = root.right;
  //   root = minNode;
  // } else if (root.val > key) {
  //   root.left = deleteNode(root.left, key);
  // } else if (root.val < key) {
  //   root.right = deleteNode(root.right, key);
  // }

  // return root;

  if (root === null) return null;

  if (root.val === key) {
    if (root.left === null) return root.right;
    if (root.right === null) return root.left;

    let minNode = getMin(root.right);
    root.right = deleteNode(root.right, minNode.val);
    minNode.left = root.left;
    minNode.right = root.right;
    root = minNode;
  } else if (root.val > key) {
    root.left = deleteNode(root.left, key);
  } else {
    root.right = deleteNode(root.right, key);
  }

  return root;
};

const getMin = function (node) {
  // BST 最左边的就是最小的
  while (node.left != null) node = node.left;
  return node;
};
