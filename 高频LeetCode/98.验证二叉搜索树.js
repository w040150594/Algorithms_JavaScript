// 题目描述：给定一个二叉树，判断其是否是一个有效的二叉搜索树。
// 假设一个二叉搜索树具有如下特征：
// 节点的左子树只包含小于当前节点的数。
// 节点的右子树只包含大于当前节点的数。
// 所有左子树和右子树自身必须也是二叉搜索树。

// 示例 1:
// 输入:

//     2
//    / \
//   1   3

// 输出: true

// 示例 2:
// 输入:

//     5
//    / \
//   1   4
//      / \
//     3   6

// 输出: false
// 解释: 输入为: [5,1,4,null,null,3,6]。
// 根节点的值为 5 ，但是其右子节点值为 4 。

// 中序遍历有序性质
const isValidBST = function (root) {
  let stack = [];
  let inorder = -Infinity;

  while (stack.length > 0 || root !== null) {
    while (root !== null) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    // 如果中序遍历得到的节点的值小于等于前一个 inorder，说明不是二叉搜索树
    if (root.val <= inorder) return false;
    inorder = root.val;

    root = root.right;
  }
  return true;
};

const test = {
  val: 2,
  left: {
    val: 1,
    left: null,
    right: null
  },
  right: {
    val: 3,
    right: null,
    left: null
  }
};

console.log(isValidBST(test));
