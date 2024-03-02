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

// 函数表示：invertTree(root) root是一个二叉树的根节点，返回翻转后的二叉树的根节点。
const invertTree = function (root) {
  // if (root === null) return null;
  // 对左右子树分别进行翻转,得到左右子树的翻转结果
  // const left = invertTree(root);
  // const right = invertTree(root);
  // root.left = right;
  // root.right = left;
  // return root;

  const traverse = root => {
    if (!root) return null;
    // 进入节点前交换左右子树
    [root.left, root.right] = [root.right, root.left];

    traverse(root.left);
    traverse(root.right);
  };
  traverse(root);

  return root;
};
