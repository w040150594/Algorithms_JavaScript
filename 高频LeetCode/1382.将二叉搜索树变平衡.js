// 题目描述：给你一棵二叉搜索树，请你返回一棵平衡后的二叉搜索树，新生成的树应该与原来的树有着相同的节点值。
// 如果一棵二叉搜索树中，每个节点的两棵子树高度差不超过 1 ，我们就称这棵二叉搜索树是平衡的。
// 如果有多种构造方法，请你返回任意一种。

// 示例：
// 输入：root = [1,null,2,null,3,null,4,null,null]
// 输出：[2,1,3,null,null,null,4]
// 解释：这不是唯一的正确答案，[3,1,4,null,2,null,null] 也是一个可行的构造方案。
// 提示：
// 树节点的数目在 1 到 10^4 之间。 树节点的值互不相同，且在 1 到 10^5 之间。

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
const balanceBST = function (root) {
  // 中序遍历得到有序数组,构建平衡二叉树
  const nums = [];
  const inOrder = root => {
    if (!root) return;
    inOrder(root.left);
    nums.push(root.val);
    inOrder(root.right);
  };

  const buildAVL = (low, hight) => {
    if (low > hight) return null;
    const mid = Math.floor(low + (hight - low) / 2);
    const cur = new TreeNode(nums[mid]);
    cur.left = buildAVL(low, mid - 1);
    cur.right = buildAVL(mid + 1, right);
    return cur;
  };
  inOrder(root);
  return buildAVL(0, nums.length - 1);
};
