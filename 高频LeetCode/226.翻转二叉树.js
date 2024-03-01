// 题目描述：翻转一棵二叉树。

// 示例：
// 输入：
//      4
//    /   \
//   2     7
//  / \   / \
// 1   3 6   9

// 输出：
//      4
//    /   \
//   7     2
//  / \   / \
// 9   6 3   1

// 对每一个子树的左右节点调换->递归

const invertTree = function (root) {
  if (root === null) return null;

  const temp = root.left;
  root.left = invertTree(root.right);
  root.right = invertTree(temp);

  return root;
};
