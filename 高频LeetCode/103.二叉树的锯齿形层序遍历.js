// 给你二叉树的根节点 root ，返回其节点值的 锯齿形层序遍历 。（即先从左往右，再从右往左进行下一层遍历，以此类推，层与层之间交替进行）。

// 示例 1：

// 输入：root = [3,9,20,null,null,15,7]
// 输出：[[3],[20,9],[15,7]]
// 示例 2：

// 输入：root = [1]
// 输出：[[1]]
// 示例 3：

// 输入：root = []
// 输出：[]

const zigzagLevelOrder = function (root) {
  if (!root) return [];

  const res = [];
  const queue = [root];
  let flag = false;

  while (queue.length) {
    const count = queue.length;
    const level = [];

    for (let i = 0; i < count; i++) {
      const node = queue.shift();
      flag ? level.unshift(node.val) : level.push(node.val);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    res.push(level);
    flag = !flag;
  }

  return res;
};
