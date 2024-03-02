// 给你两棵二叉树的根节点 p 和 q ，编写一个函数来检验这两棵树是否相同。

// 如果两个树在结构上相同，并且节点具有相同的值，则认为它们是相同的。

// 示例 1：

// 输入：p = [1,2,3], q = [1,2,3]
// 输出：true
// 示例 2：

// 输入：p = [1,2], q = [1,null,2]
// 输出：false
// 示例 3：

// 输入：p = [1,2,1], q = [1,1,2]
// 输出：false

const isSameTree = function (p, q) {
  // 递归的终止条件,两个节点都为空
  if (p === null && q === null) return true;
  // 两个节点一个为空一个不为空
  if (p === null || q === null) return false;
  // 两个节点都不为空,但是值不相等
  if (p.val !== q.val) return false;

  // 递归的判断两个节点的左右子树是否相等
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};
