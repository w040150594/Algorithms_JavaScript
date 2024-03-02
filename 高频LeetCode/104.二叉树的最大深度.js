// 给定一个二叉树 root ，返回其最大深度。

// 二叉树的 最大深度 是指从根节点到最远叶子节点的最长路径上的节点数。

// 示例 1：

// 输入：root = [3,9,20,null,null,15,7]
// 输出：3
// 示例 2：

// 输入：root = [1,null,2]
// 输出：2
const maxDepth = function (root) {
  let maxDepth = 0;

  const traverse = (root, level) => {
    if (!root) return;
    if (root.left === null && root.right === null) {
      maxDepth = Math.max(maxDepth, level);
    }

    traverse(root.left, level + 1);
    traverse(root.right, level + 1);
  };
  traverse(root, 1);

  return maxDepth;
};
