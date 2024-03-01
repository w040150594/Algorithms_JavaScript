// 给你一个二叉树的根节点 root ， 检查它是否轴对称

const isSymmetric = function (root) {
  const isMirror = (t1, t2) => {
    // 递归结束,两个节点都为空
    if (t1 === null && t2 === null) return true;
    // 递归结束,两个节点有一个为空
    if (t1 === null || t2 === null) return false;

    // 递归,判断左右节点是否相等
    return t1.val === t2.val && isMirror(t1.right, t2.left) && isMirror(t1.left, t2.right);
  };

  return isMirror(root, root);
};
