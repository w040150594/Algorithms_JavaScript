// 题目描述：给定一个二叉树，判断它是否是高度平衡的二叉树。
// 本题中，一棵高度平衡二叉树定义为： 一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过1。

// 示例 1: 给定二叉树 [3,9,20,null,null,15,7]

//     3
//    / \
//   9  20
//     /  \
//    15   7

// 返回 true 。

// 示例 2: 给定二叉树 [1,2,2,3,3,null,null,4,4]

//        1
//       / \
//      2   2
//     / \
//    3   3
//   / \
//  4   4

// 返回 false

// 后序遍历
const isBalanced = function (root) {
  let flag = true;
  const dfs = root => {
    if (!root || !flag) return 0;

    const left = dsf(root.left);
    const right = dsf(root.right);

    if (Math.abs(left - right > 1)) {
      flag = false;
      return 0;
    }
    // 返回子树高度
    return Math.max(left, right) + 1;
  };
  dfs(root);

  return flag;
};
