// 给你二叉树的根节点 root 和一个表示目标和的整数 targetSum 。判断该树中是否存在 根节点到叶子节点 的路径，这条路径上所有节点值相加等于目标和 targetSum 。如果存在，返回 true ；否则，返回 false 。

// 叶子节点 是指没有子节点的节点。

// 示例 1：

// 输入：root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
// 输出：true
// 解释：等于目标和的根节点到叶节点路径如上图所示。
// 示例 2：

// 输入：root = [1,2,3], targetSum = 5
// 输出：false
// 解释：树中存在两条根节点到叶子节点的路径：
// (1 --> 2): 和为 3
// (1 --> 3): 和为 4
// 不存在 sum = 5 的根节点到叶子节点的路径。
// 示例 3：

// 输入：root = [], targetSum = 0
// 输出：false
// 解释：由于树是空的，所以不存在根节点到叶子节点的路径。

const hasPathSum = function (root, targetSum) {
  /* 解法一、分解问题的思路 */
  // 定义：输入一个根节点，返回该根节点到叶子节点是否存在一条和为 targetSum 的路径
  // if (!root) return false;
  // if (root.left === root.right && root.val === targetSum) return true;
  // 子问题为左子树或者右子树存不存在一条和为 tagetSum - root.val 的路径
  // return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val);

  /* 解法二、遍历二叉树的思路 */
  let found = false;
  let sum = 0;
  const traverse = root => {
    if (!root) return;

    sum += root.val;
    if (root.left === null && root.right === null && sum === targetSum) found = true;

    traverse(root.left);
    traverse(root.right);

    sum -= root.val;
  };
  traverse(root);

  return found;
};
