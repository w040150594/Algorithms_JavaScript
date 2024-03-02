// 给你一个二叉树的根节点 root ， 检查它是否轴对称

const isSymmetric = function (root) {
  // 函数表示：isMirror(t1, t2) t1和t2是两个二叉树的根节点，返回两个二叉树是否对称
  const isMirror = (t1, t2) => {
    // 递归结束,两个节点都为空
    if (t1 === null && t2 === null) return true;

    // 递归结束,两个节点有一个为空
    if (t1 === null || t2 === null) return false;
    // 递归结束,两个节点都不为空,但是值不相等
    if (t1.val !== t2.val) return false;

    // 递归的判断t1的左子树和t2的右子树是否对称, t1的右子树和t2的左子树是否对称
    return isMirror(t1.right, t2.left) && isMirror(t1.left, t2.right);
  };

  return isMirror(root, root);
};
